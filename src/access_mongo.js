import * as mongoose from "mongoose";
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected... 되었음"))
  .catch((err) => console.log(err));

const shopee_module = new mongoose.Schema({
  module_id: { type: Number },
  module_name: { type: String },
  items: {
    type: [
      {
        id: { type: Number },
        name: { type: String },
      },
    ],
  },
});

export const shopeeModule = mongoose.model(
  "shopee_module",
  shopee_module,
  "shopee_modules"
);

// const get_module = await shopeeModule.find({}).exec();
