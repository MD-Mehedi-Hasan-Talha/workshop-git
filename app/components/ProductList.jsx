"use client";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { getAllCategorys } from "@/utils";
const ProductList = ({ products }) => {
  const [selectedCat, SetSelectedCat] = useState([]);
  const [searchText, setSearchText] = useState("");
  const categorys = getAllCategorys(products);

  const handelChange = (e) => {
    let checked = e.target.checked;
    let value = e.target.value;
    SetSelectedCat((prev) =>
      checked ? [...prev, value] : prev?.filter((item) => item !== value)
    );
  };

  const filterProduct =
    selectedCat?.length === 0
      ? products
      : products.filter((produ) => selectedCat?.includes(produ?.category));

  const finalProduct = filterProduct?.filter((product) =>
    product?.name
      ?.toLocaleLowerCase()
      ?.includes(searchText?.toLocaleLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Product List
          </h2>
          <div className="flex gap-6 items-center justify-center">
            <div>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search product"
                className="outline-teal-500 border-none px-3 py-2 text-base text-black ring-1 rounded-sm"
              />
            </div>
            <div className="relative">
              <span className="text-black text-base cursor-pointer">
                Filter
                <IoIosArrowDown className="inline-block ml-2 font-semibold text-base text-black" />
              </span>
              <div className="absolute top-10 z-10 right-0 bg-gray-200 rounded-md w-[200px] p-5">
                {categorys?.map((cat, i) => (
                  <label
                    key={i}
                    className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4"
                      value={cat}
                      checked={selectedCat.includes(cat)}
                      onChange={handelChange}
                    />
                    <span className="ml-2">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
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
