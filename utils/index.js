export const getAllCategorys = (products) => {
  const categorys = products.map((product) => {
    return product?.category;
  });
  const removeDuplicateElements = new Set(categorys);
  const filterCategorys = [...removeDuplicateElements];
  return filterCategorys;
};
