import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  pincode: { type: Number, min: 6, max: 6, required: true },
});


const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { addressSchema },
    specializedIn: [{ type: String }],
  },
  { timestamps: true }
);
export const Hospital = mongoose.model("Hospital", hospitalSchema);
