# `@lucid-softworks/is-property-key`

Check whether a value can be used as a JavaScript property key. Strings,
numbers, and symbols pass; all other values are rejected.

```ts
import { isPropertyKey } from "@lucid-softworks/is-property-key";

if (isPropertyKey(key)) {
  Reflect.get(object, key);
}
```
