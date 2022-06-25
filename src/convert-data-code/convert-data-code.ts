/**
 * Convert binary to all other code
 * using type script
 */

//convert binary to decimal
function convertBinaryToDecimal(bin: string): number {
  return parseInt(bin, 2);
}
//convert binary to hexadecimal
function convertBinaryToHexadecimal(bin: string): string {
  return parseInt(bin, 2).toString(16);
}
//convert binary to octal
function convertBinaryToOctal(bin: string): string {
  return parseInt(bin, 2).toString(8);
}
//convert Decimal to binary
function convertDecimalToBinary(dec: number): string {
  return dec.toString(2);
}
//convert Decimal to hexadecimal
function convertDecimalToHexadecimal(dec: number): string {
  return dec.toString(16);
}
//convert Decimal to octal
function convertDecimalToOctal(dec: number): string {
  return dec.toString(8);
}
//convert Hexadecimal to binary
function convertHexadecimalToBinary(hex: string): string {
  return parseInt(hex, 16).toString(2);
}
//convert Hexadecimal to decimal
function convertHexadecimalToDecimal(hex: string): number {
  return parseInt(hex, 16);
}
//convert Hexadecimal to octal
function convertHexadecimalToOctal(hex: string): string {
  return parseInt(hex, 16).toString(8);
}
//convert Octal to binary
function convertOctalToBinary(oct: string): string {
  return parseInt(oct, 8).toString(2);
}
//convert Octal to decimal
function convertOctalToDecimal(oct: string): number {
  return parseInt(oct, 8);
}
//convert Octal to hexadecimal
function convertOctalToHexadecimal(oct: string): string {
  return parseInt(oct, 8).toString(16);
}

export {
  convertBinaryToDecimal,
  convertBinaryToHexadecimal,
  convertBinaryToOctal,
  convertDecimalToBinary,
  convertDecimalToHexadecimal,
  convertDecimalToOctal,
  convertHexadecimalToBinary,
  convertHexadecimalToDecimal,
  convertHexadecimalToOctal,
  convertOctalToBinary,
  convertOctalToDecimal,
  convertOctalToHexadecimal
};
