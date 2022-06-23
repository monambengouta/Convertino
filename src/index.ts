export * from "./convert-data-type/convert-array-type";
export * from "./convert-data-type/convert-int-type";
export * from "./convert-data-type/convert-object-type";
export * from "./convert-data-type/convert-string-type";
export * from "./convert-data-type/convert-other-type";
export const whoim = () => {
  if ("development" === process.env.NODE_ENV) {
    console.log("convertino package to convert what u want");
  }
};
whoim();
