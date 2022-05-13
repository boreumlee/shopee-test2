import React, { useState } from "react";
import ChannelAccount from "./Channnel_Account";
import RequestForm from "./SelectedAPI/request_form";
import Selects from "./Selects/Selects";

function Form({ setResponse }) {
  const [api_path, setApi_path] = useState("");
  const [has_channel_account, setHas_channel_account] = useState("");
  const api_doc = api_path.length > 0 ? JSON.parse(api_path) : {};

  return (
    <form class="container px-4 mt-5">
      <ChannelAccount setHas_channel_account={setHas_channel_account} />
      <div class="container">
        <Selects
          has_channel_account={has_channel_account}
          setApi_path={setApi_path}
        />
        <div class="row">
          <h2>{api_doc?.api_name}</h2>
        </div>
        <div class="row" style={{ padding: "5px" }}>
          <p class="text-muted"> {api_doc?.define}</p>
        </div>
        <div class="row" style={{ padding: "9px" }}>
          <div class="col-auto text-muted">
            {api_doc?.api_name ? "Request URL" : ""}
          </div>
          <div class="col-auto">{api_doc?.url}</div>
        </div>
        <div class="row" style={{ padding: "9px" }}>
          <div class="col-auto text-muted">
            {api_doc?.api_name ? "Http Method" : ""}
          </div>
          <div class="col-auto">
            {api_doc?.method === 1
              ? "POST"
              : api_doc?.method === 2
              ? "GET"
              : ""}
          </div>
        </div>
        <RequestForm
          api_path={api_path}
          has_channel_account={has_channel_account}
          setResponse={setResponse}
        />
      </div>
    </form>
  );
}

export default Form;
