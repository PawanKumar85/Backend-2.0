import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    completed: { type: Boolean, required: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    SubTodos: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubTodo" }],
  },
  { timestamps: true }
);
export const Todo = mongoose.model("Todo", todoSchema);
