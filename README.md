# tfjs-image-node

[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kevinanielsen/tfjs-image-node?targetFile=package.json)
[![npm version](https://badge.fury.io/js/tfjs-image-node.svg)](https://badge.fury.io/js/tfjs-image-node)
[![CI](https://github.com/kevinanielsen/tfjs-image-node/actions/workflows/main.yml/badge.svg)](https://github.com/kevinanielsen/tfjs-image-node/actions/workflows/main.yml)

A simple image classifier using tfjs, that can run in Node.js

### Install

```bash
npm i tfjs-image-node
# or
pnpm add tfjs-image-node
```

### Import

tfjs-image-node has two different exports. One for the tfjs-node platform and one for the regular tfjs package - one package is preferred for operations in the node runtime, the other is preferred for regular javascript.

```typescript
const classifyImage = require("tfjs-image-node");
// or
import classifyImage from "tfjs-image-node";
```

## Example

```typescript
import classifyImage from "tfjs-image-node/node";

const model = "https://teachablemachine.withgoogle.com/models/jAIOHvmge";
const image = "https://www.stgeorges.nhs.uk/wp-content/uploads/2014/03/hand-2.jpeg";

// With tfjs-node as the platform
(async () => {
	const prediction = await classifyImage(model, image);
	console.log(prediction[0]);
})();

// With classic tfjs as the platform
(async () => {
	const prediction = await classifyImage(model, image, "classic");
	console.log(prediction[0]);
})();

// expected output:
// { label: 'Hand', probability: 0.9999574422836304 }
```

## Parameters

<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Type</td>
      <td>Description</td>  
    </tr>
  </thead>  
  <tdata>
    <tr>
      <td>
        MODEL_URL
      </td>
      <td>
        string
      </td>
      <td>
        The URL to your AI model (currently only supports teachable machine URLs like "https://teachablemachine.withgoogle.com/models/{model_id}".
      </td>
    </tr>
    <tr>
      <td>
        IMAGE_FILE_PATH
      </td>
      <td>
        string
      </td>
      <td>
        The file path or URL to the image you want classified.
      </td>
    </tr>
    <tr>
      <td>
        PLATFORM
      </td>
      <td>
        "node" or "classic"
      </td>
      <td>
        Choose the platform to use for the computation of the prediction. If you want to use the tfjs-node platform, use "node" as the parameter, otherwise use "classic".
      </td>
    </tr>
  </tdata>
</table>
