/**
 * Convert array to all other types
 * using type script
 */

//convert array to object
function convertArrayToObject(arr: any[]): object {
  return {
    arr: arr
  };
}
//convert array to string
function convertArrayToString(arr: any[]): string {
  return arr.join("");
}
//convert array to number
function convertArrayToNumber(arr: any[]): number {
  return +arr.join("");
}
//convert array to boolean
function convertArrayToBoolean(arr: any[]): boolean {
  return arr.length === 0 ? false : true;
}
//convert array to map
function convertArrayToMap(arr: any[]): Map<string, string> {
  return new Map<string, string>(arr);
}
//convert array to set
function convertArrayToSet(arr: any[]): Set<string> {
  return new Set<string>(arr);
}

//convert array to list
function convertArrayToList(arr: any[]): any {
  return arr.reduceRight((child, val) => ({ val, child }), null);
}
//convert array to json
function convertArrayToJSON(arr: any[]): object {
  return JSON.parse(arr.join(""));
}
//convert array to pagetype
function convertArrayToPageType(arr: any[], pagetype: string) {
  switch (pagetype) {
    case "text/html":
      return new DOMParser().parseFromString(arr.join(""), "text/html");
    case "text/xml":
      return new DOMParser().parseFromString(arr.join(""), "text/xml");
    case "application/json":
      return JSON.parse(arr.join(""));
    case "application/xml":
      return new DOMParser().parseFromString(arr.join(""), "application/xml");
    case "application/xhtml+xml":
      return new DOMParser().parseFromString(
        arr.join(""),
        "application/xhtml+xml"
      );
    default:
      return {
        arr: arr
      };
  }
}

export {
  convertArrayToObject,
  convertArrayToString,
  convertArrayToNumber,
  convertArrayToBoolean,
  convertArrayToMap,
  convertArrayToSet,
  convertArrayToList,
  convertArrayToJSON,
  convertArrayToPageType
};
