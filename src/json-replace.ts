export default class JsonReplace {
  fieldsToArray(fieldsExpression: String): Array<String> {
    const string_splitted: Array<String> = fieldsExpression.split(';');
    
    return string_splitted
      .filter(elt => elt != '');
  }
}