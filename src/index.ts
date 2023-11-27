const Jimp = require("jimp");

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
  PLATFORM?: "node" | "regular"
) => Promise<ResultType[] | Error>;

const classifyImage: ClassifyImageType = async (
  MODEL_DIR_PATH,
  IMAGE_FILE_PATH,
  PLATFORM = "node"
) => {
  const tf = require(PLATFORM === "node"
    ? "@tensorflow/tfjs-node"
    : "@tensorflow/tfjs");

  if (!MODEL_DIR_PATH || !IMAGE_FILE_PATH) {
    return new Error("MISSING_PARAMETER");
  }

  const res = await fetch(`${MODEL_DIR_PATH}/metadata.json`);
  const METADATA: IMetadata = await res.json();

  let labels: string[] = METADATA["labels"];

  const model = await tf.loadLayersModel(`${MODEL_DIR_PATH}/model.json`);

  const image = await Jimp.read(IMAGE_FILE_PATH);
  image.cover(
    224,
    224,
    Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
  );

  const NUM_OF_CHANNELS = 3;
  let values = new Float32Array(224 * 224 * NUM_OF_CHANNELS);

  let i = 0;
  image.scan(
    0,
    0,
    image.bitmap.width,
    image.bitmap.height,
    (x: number, y: number) => {
      const pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
      pixel.r = pixel.r / 127.0 - 1;
      pixel.g = pixel.g / 127.0 - 1;
      pixel.b = pixel.b / 127.0 - 1;
      pixel.a = pixel.a / 127.0 - 1;
      values[i * NUM_OF_CHANNELS + 0] = pixel.r;
      values[i * NUM_OF_CHANNELS + 1] = pixel.g;
      values[i * NUM_OF_CHANNELS + 2] = pixel.b;
      i++;
    }
  );

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
