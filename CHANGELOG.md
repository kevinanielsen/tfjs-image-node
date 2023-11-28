# tfjs-image-node

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