## JSON data types definition

### Install

```sh
npm i -D @ekb1zh/json-types
```

### Using

```ts
import { JsonObject } from '@ekb1zh/json-types'

const o: JsonObject = {
  // Here will be valid only data from JsonObject type
}
```

### Source

```ts
export type Json = JsonPrimitive | JsonArray | JsonObject
export type JsonPrimitive = null | boolean | number | string
export type JsonArray = Json[]
export type JsonObject = {
  [key: string]: Json
}
```
