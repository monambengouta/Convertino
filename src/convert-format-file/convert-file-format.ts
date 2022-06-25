/**
 * Convert ile format to all other format
 * using type script
 */
import * as fs from "fs";
//convert file to binary
function convertFileToBinary(file: string): string {
  return fs.readFileSync(file, "binary");
}
//convert file to decimal
function convertFileToDecimal(file: string): number {
  return parseInt(fs.readFileSync(file, "binary"), 2);
}
//convert file to hexadecimal
function convertFileToHexadecimal(file: string): string {
  return parseInt(fs.readFileSync(file, "binary"), 2).toString(16);
}
//convert file to octal
function convertFileToOctal(file: string): string {
  return parseInt(fs.readFileSync(file, "binary"), 2).toString(8);
}
//convert file to data format type
function convertFileToDataFormatType(file: string, format: string): string {
  switch (format) {
    case "binary":
      return convertFileToBinary(file);
    case "decimal":
      return convertFileToDecimal(file).toString();
    case "hexadecimal":
      return convertFileToHexadecimal(file);
    case "octal":
      return convertFileToOctal(file);
    default:
      return "";
  }
}
//convert file to function
function convertFileToFunction(file: string): Function {
  return Function(fs.readFileSync(file, "binary"));
}
//convert file to JSON
function convertFileToJSON(file: string): object {
  return JSON.parse(fs.readFileSync(file, "binary"));
}

export {
  convertFileToBinary,
  convertFileToDecimal,
  convertFileToHexadecimal,
  convertFileToOctal,
  convertFileToDataFormatType,
  convertFileToFunction,
  convertFileToJSON
};
