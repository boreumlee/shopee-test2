import axios from "axios";
import React, { useState } from "react";

function RequestForm({ api_path, setResponse, has_channel_account }) {
  const [reqParams, setReqParams] = useState({});
  const api_doc = api_path.length > 0 ? JSON.parse(api_path) : {};
  const params = (api_doc) => {
    if (api_doc?.params) {
      const return_params = api_doc.params;
      if (
        return_params.includes("partner_id") &&
        return_params.includes("shopid")
      ) {
        const { response_params, ...req_param } = JSON.parse(return_params);
        const request_params = req_param.request_params.filter(
          ({ name }) =>
            name !== "partner_id" && name !== "shopid" && name !== "timestamp"
        );
        return { response_params, request_params };
      }
      return JSON.parse(return_params);
    }
    return {};
  };

  const onChange = (e) => {
    const { request_params } = params(api_doc);

    setReqParams({
      ...reqParams,
      [e.target.name]:
        request_params.find(({ name }) => name === e.target.name).target ===
        "string"
          ? e.target.value
          : JSON.parse(e.target.value),
    });
  };

  const submitBTN = async () => {
    console.log("reqParams:  ", reqParams);
    try {
      if (api_doc.url.includes("v1")) {
        const response = await axios({
          method: "post",
          url: "/shopee_v1",
          data: {
            body: reqParams,
            channel_account: has_channel_account,
            url: api_doc.url,
          },
        });
        setResponse(JSON.stringify(response.data));
      } else {
        const response = await axios({
          method: "post",
          url: "/shopee_v2",
          data: {
            body: reqParams,
            channel_account: has_channel_account,
            url: api_doc.url,
            method: api_doc.method === 1 ? "post" : "get",
          },
        });
        setResponse(JSON.stringify(response.data));
      }
    } catch (error) {}
  };

  return (
    <div>
      {params(api_doc)?.request_params ? (
        params(api_doc).request_params.map((req_param) => (
          <div
            class="row g-3 align-items-center"
            style={{ "margin-bottom": "5px" }}
          >
            {req_param.required === "yes" ? (
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text text-danger">
                  *
                </span>
              </div>
            ) : (
              <></>
            )}
            <div class="col-auto">
              <label class="col-form-label">{req_param.name}</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                name={req_param.name}
                placeholder={req_param.sample}
                onChange={onChange}
              />
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      <button
        class="btn btn-primary"
        onClick={submitBTN}
        type="button"
        style={{ margin: "10px" }}
      >
        test
      </button>
    </div>
  );
}

export default RequestForm;
