const Jimp = require("jimp");
const tfNode = require("@tensorflow/tfjs-node");
const tfJs = require("@tensorflow/tfjs");
let tf: any;

interface IMetadata extends JSON {
	labels: string[];
}

type ResultType = {
	label: string;
	probability: string;
};

type ClassifyImageType = (
	MODEL_DIR_PATH: string,
	IMAGE_FILE_PATH: string,
	PLATFORM?: "node" | "classic"
) => Promise<ResultType[] | Error>;

const filterInputPath = (inputPath: string) => {
	if (inputPath.endsWith("/")) {
		return inputPath.slice(0, -1);
	}
	return inputPath;
};

const classifyImage: ClassifyImageType = async (
	MODEL_DIR_PATH,
	IMAGE_FILE_PATH,
	PLATFORM = "node"
) => {
	PLATFORM === "node" ? (tf = tfNode) : (tf = tfJs);

	if (!MODEL_DIR_PATH || !IMAGE_FILE_PATH) {
		return new Error("MISSING_PARAMETER");
	}

	MODEL_DIR_PATH = filterInputPath(MODEL_DIR_PATH);

	const res = await fetch(`${MODEL_DIR_PATH}/metadata.json`);
	if (res.status !== 200) {
		return new Error("METADATA_NOT_FOUND");
	}

	const METADATA: IMetadata = await res.json();

	if (METADATA["labels"].length === 0 || METADATA["labels"]! instanceof Array) {
		return new Error("NO_METADATA_LABELS");
	}

	let labels: string[] = METADATA["labels"];

	const model = await tf.loadLayersModel(`${MODEL_DIR_PATH}/model.json`);

	const image = await Jimp.read(IMAGE_FILE_PATH);
	image.cover(224, 224, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);

	const NUM_OF_CHANNELS = 3;
	let values = new Float32Array(224 * 224 * NUM_OF_CHANNELS);

	let i = 0;
	image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x: number, y: number) => {
		const pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
		pixel.r = pixel.r / 127.0 - 1;
		pixel.g = pixel.g / 127.0 - 1;
		pixel.b = pixel.b / 127.0 - 1;
		pixel.a = pixel.a / 127.0 - 1;
		values[i * NUM_OF_CHANNELS + 0] = pixel.r;
		values[i * NUM_OF_CHANNELS + 1] = pixel.g;
		values[i * NUM_OF_CHANNELS + 2] = pixel.b;
		i++;
	});

	const outShape = [224, 224, NUM_OF_CHANNELS];
	let img_tensor = tf.tensor3d(values, outShape, "float32");
	img_tensor = img_tensor.expandDims(0);

	const predictions = await model.predict(img_tensor).dataSync();

	let result: ResultType[] = [];

	for (let i = 0; i < predictions.length; i++) {
		const label = labels[i];
		const probability = predictions[i];
		result.push({ label: label, probability: probability });
	}

	return result.sort((a, b) => Number(b.probability) - Number(a.probability));
};

export default classifyImage;
