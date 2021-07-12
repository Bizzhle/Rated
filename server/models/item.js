var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const ItemSchema = Schema({
  title: { type: String, required: true },
  comment: { type: String, required: true },
  category: [{ type: Schema.ObjectId, ref: "Category" }],
  store: [{ type: Schema.ObjectId, ref: "Store" }],
  rating: [{ type: String, required: true }],
});

ItemSchema.virtual("url").get(function () {
  return "/catalog/item/" + this._id;
});

module.exports = mongoose.model("Item", ItemSchema);

// Models are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values.

// Models are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values.
