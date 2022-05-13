import axios from "axios";
import React from "react";
import { v1_path, v2_path } from "../../data/path";

function ShopeePath({ p_category, setP_path }) {
  const path_list = { ...v1_path, ...v2_path };

  const onChange = async (e) => {
    const selected_path = path_list[p_category.id].find(
      (path) => path.api_id.toString() === e.target.value
    );

    try {
      const result = await axios({
        method: "get",
        url: "/api/doc",
        params: {
          version: selected_path.version,
          api_id: selected_path.api_id,
        },
      });
      setP_path(JSON.stringify(result.data));
    } catch (error) {}
  };

  return (
    <div class="mb-3 col">
      <label for="exampleFormControlTextarea1" class="form-label">
        API Path
      </label>
      {p_category.id.length > 0 ? (
        <select
          onChange={onChange}
          class="form-select form-select-lg mb-3 form-control"
          aria-label=".form-select-lg example"
        >
          <option selected>select</option>
          {path_list[p_category.id].map((path) => (
            <option value={path.api_id} key={path.api_id}>
              {path.api_name}
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

export default ShopeePath;
