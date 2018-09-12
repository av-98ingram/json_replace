import JsonReplace from './json-replace';

const jsonReplace = new JsonReplace();

const child: Object = { a: 10 }
const json: Object = { a: child, b: 'value b' }

jsonReplace.searchValue(json, 'a.a')