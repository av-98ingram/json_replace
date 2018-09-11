export default class JsonReplace {
  fieldsToArray(fieldsExpression: String): Array<String> {
    return fieldsExpression
      .split(';')
      .filter(elt => elt != '')
  }
}