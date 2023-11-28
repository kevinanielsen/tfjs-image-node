---
"tfjs-image-node": major
---

# Refactor classifyImage to use single file and import and reintroduce "platform" parameter.

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
