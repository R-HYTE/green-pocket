import { Schema, model } from "mongoose";

const feedbackSchema = Schema(
    {
        comment: { type: String, required: true },
        stars: { type: Number, required: true } ,
        image_url: { type: String, required: true }
    },
    { timestamps: true }
);

export default model('feedbacks', feedbackSchema);
