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
  */
  return ["all", ...new Set(unique)];
};
