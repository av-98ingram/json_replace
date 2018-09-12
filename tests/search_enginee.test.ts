import SearchEnginee from '../src/search-enginee';

test('test: get value from JSON', () => {
  const searchEnginee: SearchEnginee = new SearchEnginee()
  const json: Object = { a: 'value a', b: 'value b' }
  const func: Object = value => value + 'x'

  searchEnginee.replaceValue(json, 'b', func)

  expect(json).toEqual({ a: 'value a', b: 'value bx' });
})

test('test: get value from a key with child', () => {
  const searchEnginee: SearchEnginee = new SearchEnginee()
  const child: Object = { a: 10 }
  const json: Object = { a: child, b: 'value b' }
  const func: Object = value => value + 5
  const expectedValue ={ a: {a : 15 }, b: 'value b' }

  searchEnginee.replaceValue(json, 'a.a', func)

  expect(json).toEqual(expectedValue)
})