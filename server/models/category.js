var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CategorySchema = Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
});

CategorySchema.virtual("url").get(function () {
  return "/catalog/category/" + this._id;
});

module.exports = mongoose.model("Category", CategorySchema);
