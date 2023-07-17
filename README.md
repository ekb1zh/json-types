## JSON data types definition

### Install

```sh
npm i -D @ekb1zh/json-types
```

### Using

```ts
import type * as Json from '@ekb1zh/json-types'

const jsonObject: Json.Object = {
  // your properties
}
```

### Source

```ts
export type Value = Primitive | Array | Object
export type Primitive = null | boolean | number | string
export type Array = Value[]
export type Object = {
  [key: string]: Value
}
```
