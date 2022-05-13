import axios from "axios";
import React, { useState } from "react";

function ChannelAccount({ setHas_channel_account }) {
  const [channel_account, setChannel_account] = useState("");

  const onChange = (e) => {
    setChannel_account(e.target.value);
  };

  const lookUp = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/invalid_channel_account",
        params: {
          channel_account,
        },
      });
      console.log(response.data);
      if (!!response.data?.channel_account) {
        setHas_channel_account(response.data.channel_account);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        Channel Account
      </label>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          value={channel_account}
          onChange={onChange}
        />
        <button
          onClick={lookUp}
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          조회
        </button>
      </div>
    </div>
  );
}

export default ChannelAccount;
