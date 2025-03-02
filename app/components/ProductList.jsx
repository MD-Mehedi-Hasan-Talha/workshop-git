"use client";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { getAllCategorys, getFilterProducts, getSearchProducts } from "@/utils";
import ProductSearch from "./ProductSearch";
import FilterProduct from "./FilterProduct";
const ProductList = ({ products }) => {
  const [selectedCat, SetSelectedCat] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  const categorys = getAllCategorys(products);

  const handelChange = (e) => {
    let checked = e.target.checked;
    let value = e.target.value;
    SetSelectedCat((prev) =>
      checked ? [...prev, value] : prev?.filter((item) => item !== value)
    );
  };
  const handelToggle = () => {
    setToggle((prev) => !prev);
  };

  const filterProduct = getFilterProducts(selectedCat, products);
  const finalProduct = getSearchProducts(filterProduct, searchText);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900">
            Product List
          </h2>
          <div className="flex gap-6 flex-col md:flex-row md:items-center justify-center">
            <ProductSearch
              searchText={searchText}
              setSearchText={setSearchText}
            />
            <FilterProduct
              categorys={categorys}
              selectedCat={selectedCat}
              handelChange={handelChange}
              toggle={toggle}
              onToggle={handelToggle}
            />
          </div>
        </div>

        <div
          id="product-container"
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {finalProduct &&
            finalProduct?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
