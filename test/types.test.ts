import * as Json from '../dist'

test('types', () => {
  const nul: Json.Primitive = null
  const boolean: Json.Primitive = false
  const number: Json.Primitive = 0
  const string: Json.Primitive = ''

  const jsonArrayEmpty: Json.Array = []
  const jsonArray: Json.Array = [
    null,
    false,
    0,
    '',
    { nul, boolean, number, string },
    [{ nul, boolean, number, string }],
  ]

  const jsonObjectEmpty: Json.Object = {}
  const jsonObject: Json.Object = {
    null: null,
    boolean: false,
    number: 0,
    string: '',
  }

  const json1: Json.Value = null
  const json2: Json.Value = false
  const json3: Json.Value = 0
  const json4: Json.Value = ''
  const json5: Json.Value = {
    jsonArray,
    jsonArrayEmpty,
    jsonObject,
    jsonObjectEmpty,
  }
  const json6: Json.Value = [
    { jsonArray, jsonArrayEmpty, jsonObject, jsonObjectEmpty },
  ]

  const json: Json.Value = {
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
