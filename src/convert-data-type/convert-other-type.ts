/**
 * Convert other to all other types
 * using type script
 */

//convert non data type type to number
function convertNonDataTypeToNumber(value: undefined | unknown | null): number {
  value = 0;
  return value as number;
}

//convert non data type type to boolean
function convertNonDataTypeToBoolean(
  value: undefined | unknown | null
): boolean {
  value = false;
  return value as boolean;
}

export { convertNonDataTypeToBoolean, convertNonDataTypeToNumber };
