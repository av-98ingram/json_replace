import JsonReplace from '../src/json-replace';

test('function that transform field string to array', () => {
  const jsonReplace = new JsonReplace()

  expect(jsonReplace.fieldsToArray('field1;field2'))
    .toEqual(['field1', 'field2'])
})

test('function can`t return a empty', () => {
  const jsonReplace = new JsonReplace()

  expect(jsonReplace.fieldsToArray('field1;field2;'))
    .not.toEqual(['field1', 'field2', ''])
})