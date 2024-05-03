const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PackageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  Things: {
    type: Array,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("Package", PackageSchema);
