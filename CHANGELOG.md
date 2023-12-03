# tfjs-image-node

## 2.2.0

### Minor Changes

- [#23](https://github.com/kevinanielsen/tfjs-image-node/pull/23) [`cee7c65`](https://github.com/kevinanielsen/tfjs-image-node/commit/cee7c658e502d68befaba8818e4346254e591301) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - add option to use specified metadata

## 2.1.0

### Minor Changes

- [`73fafce`](https://github.com/kevinanielsen/tfjs-image-node/commit/73fafcef5cd98a2fc67a952dd7057256381bc1a6) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - FIX!!!

## 2.0.4

### Patch Changes

- [`3adc2c7`](https://github.com/kevinanielsen/tfjs-image-node/commit/3adc2c7b789cf3464ceee5cb5aad3794ae62f0bc) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - FIX! Add dist folder to files

## 2.0.3

### Patch Changes

- [#19](https://github.com/kevinanielsen/tfjs-image-node/pull/19) [`84c2bb7`](https://github.com/kevinanielsen/tfjs-image-node/commit/84c2bb71cd35c3b8b72ef2bd53ed53f1b4f0b140) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - Add filter to remove necessity for no "/" at end of MODEL_DIR_PATH

## 2.0.2

### Patch Changes

- Add prettier and format

## 2.0.1

### Patch Changes

- [`42adf7e`](https://github.com/kevinanielsen/tfjs-image-node/commit/42adf7e90db05b6d4189c09be89e4a099c0e831b) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - Change access to public in changeset config

## 2.0.0

### Major Changes

- [#14](https://github.com/kevinanielsen/tfjs-image-node/pull/14) [`78cca17`](https://github.com/kevinanielsen/tfjs-image-node/commit/78cca177edab647d327afcd4de2cf8f3bb8010b2) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - # Refactor classifyImage to use single file and import and reintroduce "platform" parameter.

  ## _WHAT:_

  The classifyImage function has been refactored to use single file and import.

  ## _HOW:_

  Change function call to

  ```typescript
  classifyImage(model, image, "node");
  // OR
  classifyImage(model, image, "classic");
  ```

  The default platform will be node. It is not necessary to specify this.

## 1.1.5

### Patch Changes

- [`11cf0f0`](https://github.com/kevinanielsen/tfjs-image-node/commit/11cf0f02e1451494dee54b2239e79d9c8d5aebe1) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - Fix workflow yml

- [`ac5141e`](https://github.com/kevinanielsen/tfjs-image-node/commit/ac5141e9440e8e99bb7267922ab76d124d14039b) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - Add changesets/cli again

- [`d7fefeb`](https://github.com/kevinanielsen/tfjs-image-node/commit/d7fefebf1fdcb742b8ea092531250a2492643746) Thanks [@kevinanielsen](https://github.com/kevinanielsen)! - Fix release gh workflow

## 1.1.4

### Patch Changes

- reintroduce changesets
