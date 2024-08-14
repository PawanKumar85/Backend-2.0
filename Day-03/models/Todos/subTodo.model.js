import { type } from "express/lib/response";
import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    completed: { type: Boolean, required: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
