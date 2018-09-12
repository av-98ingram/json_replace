import JsonReplace from '../src/json-replace';

test('function that transform field string to array', () => {
  const jsonReplace: JsonReplace = new JsonReplace()

  expect(jsonReplace.fieldsToArray('field1;field2'))
    .toEqual(['field1', 'field2'])
})

test('function can`t return a empty', () => {
  const jsonReplace = new JsonReplace()

  expect(jsonReplace.fieldsToArray('field1;field2;'))
    .not.toEqual(['field1', 'field2', ''])
})

// test('test: replace values', done => {
//   const jsonReplace: JsonReplace = new JsonReplace()
//   const child: Object = { a: 10 }
//   const json: Object = { a: child, b: 5 }
//   const fields: string = 'a.a;b'
//   const func: Object = value => value + 5
//   const expectedResult: Object = {a: { a: 15 },b: 10}

//   jsonReplace.replace(json, fields, func)
//     .then(result => {
//       expect(result)
//         .toEqual(expectedResult)
      
//       done()
//     });
// })