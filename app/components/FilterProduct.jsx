import { IoIosArrowDown } from "react-icons/io";

const FilterProduct = ({
  categorys,
  selectedCat,
  handelChange,
  toggle,
  onToggle,
}) => {
  return (
    <div className="relative">
      <span onClick={onToggle} className="text-black text-base cursor-pointer">
        Filter
        <IoIosArrowDown className="inline-block ml-2 font-semibold text-base text-black" />
      </span>
      <div
        className={`absolute top-10 z-10 right-0 bg-gray-200 rounded-md p-3 ${
          toggle ? "" : "hidden"
        }`}
      >
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
              onChange={(e) => handelChange(e)}
            />
            <span className="ml-2">{cat}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
