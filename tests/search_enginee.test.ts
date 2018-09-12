import SearchEnginee from '../src/search-enginee';

test('test: get value from JSON', done => {
  const searchEnginee: SearchEnginee = new SearchEnginee()
  const json: Object = { a: 'value a', b: 'value b' }
  const func: Object = value => {
    expect(value).toEqual('value b');
    done();
  }

  searchEnginee.getValue(json, 'b', func)
})

test('test: get value from a key with child', done => {
  const searchEnginee: SearchEnginee = new SearchEnginee()
  const child: Object = { a: 10 }
  const json: Object = { a: child, b: 'value b' }
  const func: Object = value => {
    expect(value).toEqual(10);
    done();
  }

  searchEnginee.getValue(json, 'a.a', func)
})