const {Schema,model} = require("mongoose");

const ProductSchema = new Schema({
  id: Number,
  catg: String,
  image: String,
  name: String,
  price: Number,
  rating: Number,
  description:String
});

const Products = model("data", ProductSchema);

module.exports = Products;