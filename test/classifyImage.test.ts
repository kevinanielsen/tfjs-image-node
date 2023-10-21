import { describe } from "mocha";
import classifyImage from "../src/index";
import assert from "assert";

const metadata = require("./testMetadata.json");
const model = "https://teachablemachine.withgoogle.com/models/jAIOHvmge";
const image =
  "https://www.stgeorges.nhs.uk/wp-content/uploads/2014/03/hand-2.jpeg";

describe("classifyImage function", async () => {
  it("returns hand when shown a picture of a hand", async () => {
    const result = await classifyImage(model, image, metadata);

    assert.equal(result[0].label, "Hand");
  });
});
