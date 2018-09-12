export default class SearchEnginee {
  getValue(json: Object, field: string, callback: any): any {
    const filterFieldStr: any = (element, index, arr) => index != 0
    const arrFields: Array<string> = field.split('.')

    if (arrFields.length > 1) {
      const newField: string = arrFields[0]
      const newJson: string = arrFields
        .filter(filterFieldStr)
        .join('.')

      this.getValue(json[newField], newJson, callback)
    } else {
      callback(json[field])
    }
  }
}