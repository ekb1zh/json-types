import { JsonPrimitive, JsonArray, JsonObject, Json } from '../dist'

test('types', () => {
  const nul: JsonPrimitive = null
  const boolean: JsonPrimitive = false
  const number: JsonPrimitive = 0
  const string: JsonPrimitive = ''

  const jsonArray: JsonArray = [
    null,
    false,
    0,
    '',
    { nul, boolean, number, string },
    [{ nul, boolean, number, string }],
  ]

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
  const json5: Json = { nul, boolean, number, string }
  const json6: Json = [{ nul, boolean, number, string }]

  console.log({
    nul,
    boolean,
    number,
    string,
    jsonArray,
    jsonObject,
    json1,
    json2,
    json3,
    json4,
    json5,
    json6,
  })
})
