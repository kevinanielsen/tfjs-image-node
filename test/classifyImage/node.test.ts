import { describe, expect, it } from "vitest";
import classifyImage from "../../src/node";

const model = "https://teachablemachine.withgoogle.com/models/jAIOHvmge";
const imageHand =
  "https://www.stgeorges.nhs.uk/wp-content/uploads/2014/03/hand-2.jpeg";
const imageNoHand =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg";
const imageHandJPEG = "./test/images/hand.jpeg";
const imageHandPNG = "./test/images/hand.png";

describe("classifyImage function - NODE PLATFORM", async () => {
  describe("Result returns", async () => {
    it("returns hand when shown a picture of a hand", async () => {
      const result = await classifyImage(model, imageHand);
      if (result instanceof Error) {
        return new Error();
      } else {
        expect(result[0].label).toBe("Hand");
      }
    });

    it("returns 'No hand' when shown a picture not including hand", async () => {
      const result = await classifyImage(model, imageNoHand);

      if (result instanceof Error) {
        return new Error();
      } else {
        expect(result[0].label).toBe("No hand");
      }
    });

    it("returns a probability level", async () => {
      const result = await classifyImage(model, imageNoHand);
      if (result instanceof Error) {
        return new Error();
      } else {
        expect(result[0].probability).not.toBe(null);
      }
    });
  });
  describe("Error boundries", async () => {
    it("returns an error when missing a parameter", async () => {
      //@ts-expect-error
      const result = await classifyImage(imageNoHand);

      expect(result).toBeInstanceOf(Error);
    });
  });
  describe("Image types", async () => {
    it("returns a result on url image-input", async () => {
      const result = await classifyImage(model, imageHand);
      if (result instanceof Error) {
        return new Error();
      } else {
        expect(result[0].label).toBe("Hand");
      }
    });
    it("returns a result on JPEG image-input", async () => {
      const result = await classifyImage(model, imageHandJPEG);
      if (result instanceof Error) {
        return new Error();
      } else {
        expect(result[0].label).toBe("Hand");
      }
    });
    it("returns a result on PNG image-input", async () => {
      const result = await classifyImage(model, imageHandPNG);
      if (result instanceof Error) {
        return new Error();
      } else {
        expect(result[0].label).toBe("Hand");
      }
    });
  });
});