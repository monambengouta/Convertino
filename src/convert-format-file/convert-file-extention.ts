/**
 * convert file extention to all other format
 */
// convert txt file to js file
function convertFileExtentionToJS(file: string): string {
  return file.replace(/\.txt$/, ".js");
}
// convert txt file to ts file
function convertFileExtentionToTS(file: string): string {
  return file.replace(/\.txt$/, ".ts");
}
// convert txt file to json file
function convertFileExtentionToJSON(file: string): string {
  return file.replace(/\.txt$/, ".json");
} // convert txt file to other file
function convertFileExtentionToOther(file: string, extention: string): string {
  return file.replace(/\.txt$/, extention);
} // convert txt file to binary file

export {
  convertFileExtentionToJS,
  convertFileExtentionToTS,
  convertFileExtentionToJSON,
  convertFileExtentionToOther,
};
