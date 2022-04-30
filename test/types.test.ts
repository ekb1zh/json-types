import { JsonPrimitive, JsonArray, JsonObject, Json } from '../dist'

test('types', () => {
  const nul: JsonPrimitive = null
  const boolean: JsonPrimitive = false
  const number: JsonPrimitive = 0
  const string: JsonPrimitive = ''

  const jsonArrayEmpty: JsonArray = []
  const jsonArray: JsonArray = [
    null,
    false,
    0,
    '',
    { nul, boolean, number, string },
    [{ nul, boolean, number, string }],
  ]

  const jsonObjectEmpty: JsonObject = {}
  const jsonObject: JsonObject = {
    null: null,
    boolean: false,
    number: 0,
    string: '',
  }

  const json1: Json = null
  const json2: Json = false
  const json3: Json = 0
  const json4: Json = ''
  const json5: Json = { jsonArray, jsonArrayEmpty, jsonObject, jsonObjectEmpty }
  const json6: Json = [
    { jsonArray, jsonArrayEmpty, jsonObject, jsonObjectEmpty },
  ]

  const json: Json = {
    nul,
    boolean,
    number,
    string,
    jsonArrayEmpty,
    jsonArray,
    jsonObjectEmpty,
    jsonObject,
    json1,
    json2,
    json3,
    json4,
    json5,
    json6,
  }

  console.log(json)
})
