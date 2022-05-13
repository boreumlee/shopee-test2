import React, { useState } from "react";

function ShopeeVersion({ has_channel_account, setP_version }) {
  const [version, setVersion] = useState("");

  const onChange = (e) => {
    setVersion(e.target.value);
    setP_version(e.target.value);
  };

  const options = ["v1", "v2"];

  return (
    <div class="mb-3 col">
      <label for="exampleFormControlTextarea1" class="form-label">
        API Version
      </label>
      {has_channel_account.length ? (
        <select
          onChange={onChange}
          value={version}
          class="form-select form-select-lg mb-3 form-control"
          aria-label=".form-select-lg example"
        >
          <option selected>select</option>
          {options.map((item) => (
            <option value={item} key={item}>
              {item}
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

export default ShopeeVersion;
