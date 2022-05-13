export const example_getshopinfo = {
  api_id: 410,
  api_name: "shopee.shop.GetShopInfo",
  api_type: "",
  common_params: "",
  define: "Use this call to get information of shop",
  error_list: [
    { name: "error_auth", description: "Your partner_id is missing" },
    {
      name: "error_auth",
      description: "System cannot find this partner_id",
    },
    {
      name: "error_auth",
      description: "This partner type is not supported",
    },
    { name: "error_param", description: "shopid is invalid" },
    { name: "error", description: "shopid is invalid" },
    {
      name: "error_auth",
      description: "Authentication signature calculation is wrong",
    },
    { name: "error_auth", description: "invalid timestamp" },
  ],
  errors: "",
  gateway_api_id: 1244,
  is_get_method: 1,
  method: 1,
  module_id: 6,
  module_name: "Shop",
  params: `{"response_params":[{"sample":"123456","type":"uint64","name":"shop_id","description":"Shopee's unique identifier for a shop."},{"sample":"amazingstore","type":"String","name":"shop_name","description":"Name of the shop."},{"sample":"MY","type":"String","name":"country","description":"The two-digit code representing the country where the order was made."},{"sample":"Welcome to our shop!","type":"String","name":"shop_description","description":"Description of the shop."},{"sample":"https://youtu.be/abCdEfg9991","type":"String[]","name":"videos","description":"List of videos URLs of the shop."},{"sample":"http://f.shopee.com.my/file/6a9e153212429eb6f41261dd9bf50beb","type":"String[]","name":"images","description":"List of images URLs of the shop."},{"sample":"0","type":"uint32","name":"disable_make_offer","description":"Allow negotiations or not, 1: don't allow, 0: allow."},{"sample":"false","type":"Boolean","name":"enable_display_unitno","description":"Display pickup address or not."},{"sample":"10000","type":"uint32","name":"item_limit","description":"Listing limitation of items for the shop."},{"sample":"da6b348a4a5e4162b885ecc73c85297f","type":"String","name":"request_id","description":"The identifier for an API request for error tracking"},{"name":"status","type":"String","sample":"FRONZEN","description":"Applicable status: BANNED, FROZEN, NORMAL"},{"name":"installment_status","type":"uint32","sample":"1","description":"Only for TW seller. The status of whether shop support installment: 1 means true and 0 means false"},{"name":"sip_a_shops","type":"object[]","sample":"","description":"SIP affiliate shops info list","children":[{"name":"a_shop_id","type":" string","sample":"","description":"Affiliate shop's id"},{"name":"country","type":" string","sample":"Affiliate Shop's area","description":"Affiliate Shop's area"}]},{"name":"is_cb","type":"bool","sample":"false","description":"Use this filed to indicate whether the shop is a cross-border shop."},{"name":"non_pre_order_dts","type":"int","sample":"","description":"The days-to-ship value for non-pre orders."},{"name":"auth_time","type":" timestamp","sample":"","description":"The timestamp when the shop was authorized to the partner."},{"name":"expire_time","type":" timestamp","sample":"","description":"Use this field to indicate the expiration date for shop authorization."}],"request_params":[{"name":"partner_id","limits":"","required":"yes","sample":"99999","type":"uint64","description":"Partner ID is assigned upon registration is successful. Required for all requests."},{"name":"shopid","limits":"","required":"yes","sample":"123456","type":"uint64","description":"Shopee's unique identifier for a shop. Required for all requests."},{"name":"timestamp","limits":"","required":"","sample":"1527133290","type":"timestamp","description":"This is to indicate the timestamp of the request. Required for all requests."}]}`,
  perm_mtime: 0,
  perm_operator: "",
  perm_type: 1,
  perm_upload_file_name: "",
  priority: 4100,
  rate_limit: "[0, 0, 0]",
  request_sample: "",
  response_sample: "",
  status: 1,
  tag: "",
  test_url: "https://partner.test-stable.shopeemobile.com/api/v1/shop/get",
  update_log_list: [{ date: "2022-01-12", content: "update the country type" }],
  url: "https://partner.shopeemobile.com/api/v1/shop/get",
  version: "1.0.0",
};

export const example_getshippingparam = {
  api_id: 550,
  api_name: "v2.logistics.get_shipping_parameter",
  api_type: "Shop",
  common_params: `[{"name":"partner_id","type":"int","sample":"1","description":"Partner ID is assigned upon registration is successful. Required for all requests."},{"name":"timestamp","type":"timestamp","sample":"1610000000","description":"This is to indicate the timestamp of the request. Required for all requests. Expires in 5 minutes."},{"name":"access_token","type":"string","sample":"c09222e3fc40ffb25fc947f738b1abf1","description":"The token for API access, using to identify your permission to the api. Valid for multiple use and expires in 4 hours."},{"name":"shop_id","type":"int","sample":"600000","description":"Shopee's unique identifier for a shop. Required param for most APIs."},{"name":"sign","type":"string","sample":"e318d3e932719916a9f9ebb57e2011961bd47abfa54a36e040d050d8931596e2","description":"Signature generated by partner_id, api path, timestamp, access_token, shop_id and partner_key via HMAC-SHA256 hashing algorithm. More details: <a href= https://open.shopee.com/documents?module=87&type=2&id=58&version=2> https://open.shopee.com/documents?module=87&type=2&id=58&version=2</a>"}]`,
  define: "Use this api to get shipping parameter.",
  error_list: [
    {
      name: "logistics.error_param",
      description:
        "The order is being allocated, please wait until the allocate is completed.",
    },
    {
      name: "logistics.error_channel_exist",
      description: "Fail to find the fulfillment channel of this order.",
    },
    {
      name: "error_not_found",
      description: "Wrong parameters, detail: {msg}.",
    },
    {
      name: "error_param",
      description: "Wrong parameters, detail: {msg}.",
    },
    {
      name: "error_permission",
      description: "Sorry you don't have the permission, detail: {msg}.",
    },
    {
      name: "error_server",
      description: "System error. Please try again later.",
    },
    {
      name: "common.invalid_shop",
      description: "Shop id is invalid. Please check your shop.",
    },
    {
      name: "logistics.package_number_not_exist",
      description: "Please request with package_number for this split order.",
    },
    {
      name: "error_param",
      description: "There is no access_token in query.",
    },
    { name: "error_auth", description: "Invalid access_token." },
    {
      name: "error_status",
      description: "The order has been cancelled.",
    },
  ],
  errors: "",
  gateway_api_id: 0,
  is_get_method: 0,
  method: 2,
  module_id: 95,
  module_name: "Logistics",
  params: `{"request_params":[{"name":"order_sn","type":"string","sample":"201214JASXYXY6","limits":"","required":"yes","description":"Shopee's unique identifier for an order."}],"response_params":[{"name":"request_id","type":"string","sample":"2880a5a28510424eaa3288fd941fae2c","description":"The identifier for an API request for error tracking."},{"name":"error","type":"string","sample":"error_auth","description":"Indicate error type if hit error. Empty if no error happened."},{"name":"message","type":"string","sample":"Invalid access_token.","description":"Indicate error details if hit error. Empty if no error happened."},{"name":"response","type":"object","sample":"","description":"Detail informations you are querying.","children":[{"name":"info_needed","type":"object","sample":"","description":"The parameters required based on each specific order to Init. Must use the fields included under info_needed to call Init. For logistic_id 80003 and 80004, both Regular and JOB shipping methods are supported. If you choose Regular shipping method, please use \\"tracking_no\\" to call Init API. If you choose JOB shipping method, please use \\"sender_real_name\\" to call Init API. Note that only one of \\"tracking_no\\" and \\"sender_real_name\\" can be selected.","children":[{"name":"dropoff","type":"string[]","sample":"[ ]","description":"Could contain 'branch_id', 'sender_real_name' or 'tracking_no'. If it contains 'branch_id', choose one to Init. If it contains 'sender_real_name' or 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include \\"dropoff\\" field in Init API.Could contain 'slug'.If it contains 'slug', to return selected 3PL partner only for TW C2C sellers to drop-off parcels with."},{"name":"pickup","type":"string[]","sample":"[\\"address_id\\", \\"pickup_time_id\\"]","description":"Could contain 'address_id' and 'pickup_time_id'. Choose one address_id and its corresponding pickup_time_id to Init. If it has empty value, developer should still include \\"pickup\\" field in Init API."},{"name":"non_integrated","type":"string[]","sample":"","description":"Could contain 'tracking_no'. If it contains 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include \\"non-integrated\\" field in Init API."}]},{"name":"dropoff","type":"object","sample":"","description":"Logistics information for dropoff mode order.","children":[{"name":"branch_list","type":"object[]","sample":"","description":"List of available dropoff branches info.","children":[{"name":"branch_id","type":"int","sample":"","description":"The identity of logistics branch."},{"name":"region","type":"string","sample":"SG","description":"The region of specify address."},{"name":"state","type":"string","sample":"","description":"The state of specify address."},{"name":"city","type":"string","sample":"Asajaya","description":"The city of specify address."},{"name":"address","type":"string","sample":"","description":"The address description of specify address."},{"name":"zipcode","type":"string","sample":"","description":"The zipcode of specify address."},{"name":"district","type":"string","sample":"Sarawak","description":"The district of specify address."},{"name":"town","type":"string","sample":"","description":"The town of specify address."}]},{"name":"slug_list","type":"object[]","sample":"","description":" List of available TW 3PL drop-off partners.","children":[{"name":"slug","type":"string","sample":"","description":" The identity of slug."},{"name":"slug_name","type":"string","sample":"","description":" The name of slug."}]}]},{"name":"pickup","type":"object","sample":"","description":"Logistics information for pickup mode order.","children":[{"name":"address_list","type":"object[]","sample":"","description":"List of available pickup address info.","children":[{"name":"address_id","type":"int","sample":"234","description":"The identity of address."},{"name":"region","type":"string","sample":"SG","description":"The region of specify address."},{"name":"state","type":"string","sample":"Sarawak","description":"The state of specify address."},{"name":"city","type":"string","sample":"","description":"The city of specify address."},{"name":"district","type":"string","sample":"","description":"The district of specify address."},{"name":"town","type":"string","sample":"haha","description":"The town of specify address."},{"name":"address","type":"string","sample":"","description":"The address description of specify address."},{"name":"zipcode","type":"string","sample":"50003","description":"The zipcode of specify address."},{"name":"address_flag","type":"string[]","sample":"","description":"The flag of shop address, applicable values: default_address, pickup_address, return_address"},{"name":"time_slot_list","type":"object[]","sample":"","description":"List of pickup_time information corresponding to the address_id.","children":[{"name":"date","type":"timestamp","sample":"1608103685","description":"The date of pickup time. In timestamp."},{"name":"time_text","type":"string","sample":"","description":"The text description of pickup time. Only applicable for certain channels."},{"name":"pickup_time_id","type":"string","sample":"","description":"The identity of pickuptime."}]}]}]}]}]}`,
  perm_mtime: 1621247802,
  perm_operator: "sys",
  perm_type: 1,
  perm_upload_file_name: "",
  priority: 80102,
  rate_limit: "[0, 0, 0]",
  request_sample: " ",
  response_sample:
    "{\n" +
    '    "error": "",\n' +
    '    "message": "",\n' +
    '    "response": {\n' +
    '        "info_needed": {\n' +
    '            "dropoff": [],\n' +
    '            "pickup": [\n' +
    '                "address_id",\n' +
    '                "pickup_time_id"\n' +
    "            ]\n" +
    "        },\n" +
    '        "dropoff": null,\n' +
    '        "pickup": {\n' +
    '            "address_list": [\n' +
    "                {\n" +
    '                    "address_id": 123,\n' +
    '                    "region": "SG",\n' +
    '                    "state": "",\n' +
    '                    "city": "",\n' +
    '                    "district": "",\n' +
    '                    "town": "",\n' +
    '                    "address": "",\n' +
    '                    "zipcode": "40009",\n' +
    '                    "address_flag": [\n' +
    '                        "default_address",\n' +
    '                        "pickup_address",\n' +
    '                        "return_address"\n' +
    "                    ],\n" +
    '                    "time_slot_list": null\n' +
    "                },\n" +
    "                {\n" +
    '                    "address_id": 234,\n' +
    '                    "region": "SG",\n' +
    '                    "state": "",\n' +
    '                    "city": "",\n' +
    '                    "district": "",\n' +
    '                    "town": "",\n' +
    '                    "address": "hhh, #34",\n' +
    '                    "zipcode": "xxx",\n' +
    '                    "address_flag": [],\n' +
    '                    "time_slot_list": null\n' +
    "                }\n" +
    "            ]\n" +
    "        }\n" +
    "    },\n" +
    '    "request_id": "2880a5a28510424eaa3288fd941fae2c"\n' +
    "}",
  status: 1,
  tag: "",
  test_url:
    "https://partner.test-stable.shopeemobile.com/api/v2/logistics/get_shipping_parameter",
  update_log_list: [
    {
      date: "2022-01-20",
      content: "update Dropoff slug_list and Dropoff description",
    },
  ],
  url: "https://partner.shopeemobile.com/api/v2/logistics/get_shipping_parameter",
  version: "",
};
