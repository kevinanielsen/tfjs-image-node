# tfjs-image-node
[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kevinanielsen/tfjs-image-node?targetFile=package.json)
[![npm version](https://badge.fury.io/js/tfjs-image-node.svg)](https://badge.fury.io/js/tfjs-image-node)
[![NPM](https://github.com/kevinanielsen/tfjs-image-node/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/kevinanielsen/tfjs-image-node/actions/workflows/npm-publish.yml/badge.svg)

A simple image classifier using tfjs, that can run in Node.js

### Install

```bash
npm i tfjs-image-node
# or
yarn add tfjs-image-node
# or
bun add tfjs-image-node
```

### Import

```typescript
const classifyImage = require("tfjs-image-node");
// or
import { classifyImage } from "tfjs-image-node";
```

## Example

```typescript
const classifyImage = require("tfjs-image-node");

const model = "https://teachablemachine.withgoogle.com/models/jAIOHvmge";
const image =
  "https://www.stgeorges.nhs.uk/wp-content/uploads/2014/03/hand-2.jpeg";

(async () => {
  const prediction = await classifyImage(model, image);
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
        The URL to your AI model (currently only supports teachable machine URLs like "https://teachablemachine.withgoogle.com/models/{model_id}" <u><b>with no "/" at the end!</b></u>
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
  </tdata>
</table>
