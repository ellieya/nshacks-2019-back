const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  addressNumber: { type: String, required: true },
  streetName: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;