export default class JsonReplace {
  fieldsToArray(fieldsExpression: string): Array<string> {
    return fieldsExpression
      .split(';')
      .filter(elt => elt != '')
  }
  
  searchValue(json: Object, field: string, callback: any): any {
    const filterFieldStr: any = (element, index, arr) => index != 0
    const arrFields: Array<string> = field.split('.')

    if (arrFields.length > 1) {
      const newField: string = arrFields[0]
      const newJson: string = arrFields
        .filter(filterFieldStr)
        .join('.')

      this.searchValue(json[newField], newJson, callback)
    } else {
      callback(json[field])
    }
  }

  // replace(json: Object, fields: string, callback: any): Promise<object> {
  //   const arrOfFields: Array<string> = this.fieldsToArray(fields)
  //   const jsonReplaced: object = arrOfFields
  //     .map(field => this.searchValue(json, field, callback))

  //   return new Promise((resolve, reject) => resolve({a: { a: 15 },b: 10}))
  // }
}