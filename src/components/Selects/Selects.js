import React, { useState } from "react";
import ShopeeCategory from "./Select_Category";
import ShopeePath from "./Select_Path";
import ShopeeVersion from "./Select_Version";

function Selects({ has_channel_account, setApi_path }) {
  const [p_version, setP_version] = useState("");
  const [p_category, setP_category] = useState({ id: "", category_name: "" });
  const [p_path, setP_path] = useState("");

  setApi_path(p_path);

  return (
    <div class="row">
      <ShopeeVersion
        has_channel_account={has_channel_account}
        setP_version={setP_version}
      />
      <ShopeeCategory p_version={p_version} setP_category={setP_category} />
      <ShopeePath p_category={p_category} setP_path={setP_path} />
    </div>
  );
}

export default Selects;
