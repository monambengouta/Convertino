export * from "./convert-data-type/convert-array-type";
export * from "./convert-data-type/convert-int-type";
export * from "./convert-data-type/convert-object-type";
export * from "./convert-data-type/convert-string-type";
export * from "./convert-data-type/convert-other-type";
export * from "./convert-colors/convert-colors-type";
export * from "./convert-data-code/convert-data-code";
export * from "./convert-distance-unity/convert-distance-units";
export * from "./convert-format-file/convert-file-format";
export * from "./convert-format-file/convert-file-extention";
export const whoim = () => {
  if ("development" === process.env.NODE_ENV) {
    console.log("convertino package to convert what u want");
  }
  return "whoim";
};
whoim();
