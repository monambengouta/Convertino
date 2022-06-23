/**
 * Convert Number to all other types
 * using type script
 */

//convert Number to string methode

function convertNumberToString(num: number): string {
  return num.toString();
}

//convert Number to boolean
function convertNumberToBoolean(num: number): boolean {
  return num === 0 ? false : true;
}

//convert Number to array
function convertNumberToArray(num: number): number[] {
  return num
    .toString()
    .split("")
    .map(Number);
}

//convert Number to object
function convertNumberToObject(num: number): object {
  return {
    num: num
  };
}

//convert Number to nth size number
function convertNumberToNthSizeNumber(num: number, nth: number): number {
  return nth <= num.toString().split("").length
    ? +num
        .toString()
        .split("")
        .splice(0, nth)
        .join("")
    : +num.toString().padStart(nth, "0");
}
export {
  convertNumberToString,
  convertNumberToBoolean,
  convertNumberToArray,
  convertNumberToObject,
  convertNumberToNthSizeNumber
};
