"use client";
const ProductSearch = ({ searchText, setSearchText }) => {
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search product"
        className="outline-teal-500 border-none px-3 py-2 text-base text-black ring-1 rounded-sm"
      />
    </div>
  );
};

export default ProductSearch;
