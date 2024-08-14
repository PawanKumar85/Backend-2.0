import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    price: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
