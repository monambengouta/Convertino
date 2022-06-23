/**
 * Convert object to all other types
 * using type script
 */

//convert Object to number methode
function convertObjectToNumber(obj: object): number {
  if (
    Object.values(obj).filter(values => values.toString().match(/^\d+$/))
      .length === 0
  ) {
    return 0;
  }
  if (
    Object.values(obj).filter(values => values.toString().match(/^\d+$/))
      .length === 1
  ) {
    return +obj[Object.keys(obj)[0]];
  } else {
    throw new Error("Object has more than one number value");
  }
}

//convert Object to Boolean
function convertObjectToBoolean(obj: object): boolean {
  if (
    Object.values(obj).filter(values =>
      values.toString().match(/^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/)
    ).length === 0
  ) {
    return false;
  }
  if (
    Object.values(obj).filter(values =>
      values.toString().match(/^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/)
    ).length === 1
  ) {
    if (typeof obj[Object.keys(obj)[0]] === "string") {
      return obj[Object.keys(obj)[0]].toLowerCase() === "true";
    } else {
      return obj[Object.keys(obj)[0]];
    }
  } else {
    throw new Error("Object has more than one boolean value");
  }
}
//convert Object to String
function convertObjectToString(obj: object): string {
  if (
    Object.values(obj).filter(values => typeof values === "string").length === 0
  ) {
    return "";
  }
  if (
    Object.values(obj).filter(values => typeof values === "string").length === 1
  ) {
    return obj[Object.keys(obj)[0]];
  } else {
    throw new Error("Object has more than one string value");
  }
}

//convert Object keys to Array
function convertObjectKeysToArray(obj: object): Array<string> {
  return Object.keys(obj);
}

//convert object value to array
function convertObjectValuesToArray(obj: object): Array<any> {
  return Object.values(obj);
}
//convert object to map
function convertObjectToMap(obj: object): Map<string, any> {
  return new Map(Object.entries(obj));
}
//convert object to set
function convertObjectToSet(obj: object): Set<any> {
  return new Set(Object.values(obj));
}
//convert object to date
function convertObjectToDate(obj: object): Date {
  if (
    Object.values(obj).filter(values =>
      values.toString().match(/^\d{4}-\d{2}-\d{2}$/)
    ).length === 0
  ) {
    return new Date();
  }
  if (
    Object.values(obj).filter(values =>
      values.toString().match(/^\d{4}-\d{2}-\d{2}$/)
    ).length === 1
  ) {
    return new Date(obj[Object.keys(obj)[0]]);
  } else {
    throw new Error("Object has more than one date value");
  }
}

export {
  convertObjectToNumber,
  convertObjectToBoolean,
  convertObjectToString,
  convertObjectKeysToArray,
  convertObjectValuesToArray,
  convertObjectToMap,
  convertObjectToSet,
  convertObjectToDate
};
