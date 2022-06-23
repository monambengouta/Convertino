/**
 * Convert String to all other types
 * using type script
 */

//convert String to int methode
function convertStringToInt(str: string): number {
  return +str;
}
//convert String to Boolean
function convertStringToBoolean(str: string): boolean {
  return str === "0" || str.toUpperCase() === "False" ? false : true;
}

//convert String to array

function convertStringToArray(str: string): string[] {
  return str.split("");
}

//convert String to array with separator
function convertStringToArrayWithSeparator(
  str: string,
  separator: string
): string[] {
  return str.split(separator);
}

// convert String to Object
function convertStringToObject(str: string): object {
  return {
    str: str,
  };
}
// convertString to Date
function convertStringToDate(str: string): Date {
  return new Date(str);
}
// convertString to RegExp
function convertStringToRegExp(str: string): RegExp {
  return new RegExp(str);
}
// convertString to Error
function convertStringToError(str: string): Error {
  return new Error(str);
}
// convert String to Map
function convertStringToMap(str: string): Map<string, string> {
  return new Map<string, string>(JSON.parse(str));
}
// convert String to Set
function convertStringToSet(str: string): Set<string> {
  return new Set<string>(JSON.parse(str));
}

//convert String to JSON
function convertStringToJSON(str: string): object {
  return JSON.parse(str);
}
//convert String to XML
function convertStringToXML(str: string): object {
  return new DOMParser().parseFromString(str, "text/xml");
}
//convert String to HTML
function convertStringToHTML(str: string): object {
  return new DOMParser().parseFromString(str, "text/html");
}
//convert String to xhtml+xml
function convertStringToXHTML(str: string): object {
  return new DOMParser().parseFromString(str, "application/xhtml+xml");
}
//convert String to pagetype
function convertStringToPagetype(str: string, pagetype: string): object {
  switch (pagetype) {
    case "text/html":
      return new DOMParser().parseFromString(str, "text/html");
    case "text/xml":
      return new DOMParser().parseFromString(str, "text/xml");
    case "application/json":
      return JSON.parse(str);
    case "application/xml":
      return new DOMParser().parseFromString(str, "application/xml");
    case "application/xhtml+xml":
      return new DOMParser().parseFromString(str, "application/xhtml+xml");
    default:
      return {
        str: str,
      };
  }
}
//convert String to function
function convertStringToFunction(str: string): Function {
  return Function(str);
}
export {
  convertStringToXHTML,
  convertStringToHTML,
  convertStringToXML,
  convertStringToJSON,
  convertStringToMap,
  convertStringToSet,
  convertStringToError,
  convertStringToRegExp,
  convertStringToDate,
  convertStringToObject,
  convertStringToArrayWithSeparator,
  convertStringToArray,
  convertStringToBoolean,
  convertStringToInt,
  convertStringToFunction,
  convertStringToPagetype,
};
