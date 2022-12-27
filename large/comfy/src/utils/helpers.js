export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  /* 
  console.log("unique>>", unique);
  Array(23) [ "office", "living room", "kitchen", "bedroom", "dining", "dining", "bedroom", "living room", "office", "bedroom", … ]
  ---
  colors>> 
  Array(24) [ "all", (3) […], (2) […], (2) […], (3) […], (1) […], (3) […], (2) […], (2) […], (2) […], … ]
  ---
  colors>> 
  Array(6) [ "all", "#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900" ]
  */
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
