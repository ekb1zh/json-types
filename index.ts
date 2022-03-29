export type Json = JsonPrimitive | JsonArray | JsonObject
export type JsonPrimitive = null | boolean | number | string
export type JsonArray = Json[]
export type JsonObject = {
  [key: string]: Json
}
