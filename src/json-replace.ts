export default class JsonReplace {
  fieldsToArray(fieldsExpression: string): Array<string> {
    return fieldsExpression
      .split(';')
      .filter(elt => elt != '')
  }
  
  // replace(json: Object, fields: string, callback: any): Promise<object> {
  //   const arrOfFields: Array<string> = this.fieldsToArray(fields)
  //   const jsonReplaced: object = arrOfFields
  //     .map(field => this.searchValue(json, field, callback))

  //   return new Promise((resolve, reject) => resolve({a: { a: 15 },b: 10}))
  // }
}