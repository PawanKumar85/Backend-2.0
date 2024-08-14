import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    price: { type: String, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: [orderItemSchema],
    address: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Canceled", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
