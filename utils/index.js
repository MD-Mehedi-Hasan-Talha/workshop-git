// for get all category from our products
export const getAllCategorys = (products) => {
  const categorys = products.map((product) => {
    return product?.category;
  });
  const removeDuplicateElements = new Set(categorys);
  const filterCategorys = [...removeDuplicateElements];
  return filterCategorys;
};

// get filter product from our product
export const getFilterProducts = (selectedCategory, products) => {
  return selectedCategory?.length === 0
    ? products
    : products.filter((product) =>
        selectedCategory?.includes(product?.category)
      );
};

// get search product from our product
export const getSearchProducts = (filterProduct, searchText) => {
  return filterProduct?.filter((product) =>
    product?.name
      ?.toLocaleLowerCase()
      ?.includes(searchText?.toLocaleLowerCase())
  );
};
