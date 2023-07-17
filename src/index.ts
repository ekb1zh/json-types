export type Value = Primitive | Array | Object
export type Primitive = null | boolean | number | string
export type Array = Value[]
export type Object = {
  [key: string]: Value
}
