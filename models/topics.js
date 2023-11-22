import mongoose, { Schema } from "mongoose";

const topicsSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the schema automatically.
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicsSchema);

export default Topic;
