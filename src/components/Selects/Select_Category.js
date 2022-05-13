import React from "react";
import { v1_categories, v2_categories } from "../../data/category";

function ShopeeCategory({ p_version, setP_category }) {
  const category_list = [...v1_categories, ...v2_categories];

  const onChange = (e) => {
    console.log(e.target.value);
    const selected_cate = {
      id: e.target.value,
      category_name: category_list.find((cate) => cate.id === e.target.value)
        .category_name,
    };
    setP_category(selected_cate);
  };

  return (
    <div class="mb-3 col">
      <label for="exampleFormControlTextarea1" class="form-label">
        API Category
      </label>
      {p_version.length > 0 ? (
        <select
          onChange={onChange}
          // value={category.category_name}
          class="form-select form-select-lg mb-3 form-control"
          aria-label=".form-select-lg example"
        >
          <option selected>select</option>
          {p_version === "v1"
            ? v1_categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.category_name}
                </option>
              ))
            : v2_categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.category_name}
                </option>
              ))}
        </select>
      ) : (
        <select
          disabled
          class="form-select form-select-lg mb-3 form-control"
          aria-label=".form-select-lg example"
        >
          <option>select</option>
        </select>
      )}
    </div>
  );
}

export default ShopeeCategory;
