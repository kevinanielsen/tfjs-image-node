import { describe } from "mocha";
import classifyImage from "../src/index";
import assert from "assert";

const model = "https://teachablemachine.withgoogle.com/models/jAIOHvmge";
const imageHand =
  "https://www.stgeorges.nhs.uk/wp-content/uploads/2014/03/hand-2.jpeg";
const imageNoHand =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg";

describe("classifyImage function", async () => {
  describe("returns", async () => {
    it("returns hand when shown a picture of a hand", async () => {
      const result = await classifyImage(model, imageHand);
      if (result instanceof Error) {
        return new Error();
      } else {
        assert.equal(result[0].label, "Hand");
      }
    });

    it("returns 'No hand' when shown a picture not including hand", async () => {
      const result = await classifyImage(model, imageNoHand);

      if (result instanceof Error) {
        return new Error();
      } else {
        assert.equal(result[0].label, "No hand");
      }
    });

    it("returns a probability level", async () => {
      const result = await classifyImage(model, imageNoHand);
      if (result instanceof Error) {
        return new Error();
      } else {
        assert.notEqual(result[0].probability, null);
      }
    });
  });
  describe("Error boundries", async () => {
    it("returns an error when missing a parameter", async () => {
      //@ts-expect-error
      const result = await classifyImage(imageNoHand);

      assert.ok(result instanceof Error);
    });
  });
});
