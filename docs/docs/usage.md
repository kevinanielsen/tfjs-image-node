---
sidebar_position: 2
---

# Usage

Let's discover how to use the tfjs-image-node module.

## Getting Started

Get started by opening your node project where you want to use tfjs to identify images.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installation

You can install the tfjs-image-node module using your favorite node package manager.

```bash
npm install tfjs-image-node
# or
pnpm add tfjs-image-node
# or
bun add tfjs-image-node
# or
yarn add tfjs-image-node
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command installs all necessary dependencies you need to use tfjs-image-node, that includes the `@tensorflow/tfjs` and the `@tensorflow/tfjs-node` packages. You can choose which of these you want to utilize. Both are included since sometimes one of them can cause problems.

## Import the module

You can import the tfjs-image-node module either with the ES import or with the commonjs require.

**CJS**

```javascript
const classifyImage = require("tfjs-image-node");
```

**ES**

```javascript
import { classifyImage } from "tfjs-image-node";
```
