import FeedbackModel from "../models/feedback.model.js";

// GET all feedbacks
export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await FeedbackModel.find({}).sort({ createdAt: -1 });
        if (!feedbacks.length) return res.status(404).json({ error: "No feedbacks found" });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific feedback
export const getFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await FeedbackModel.findById(id);
        if (!feedback) return res.status(404).json({ error: "Feedback with the given ID not found" });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST a specific feedback
export const postFeedback = async (req, res) => {
    try {
        const { comment, stars, image_url } = req.body;
        if (!comment || !stars) return res.status(400).json({ error: "Comment and stars are required" });
        const feedback = await FeedbackModel.create({ comment, stars, image_url });
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE a specific feedback
export const patchFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFeedback = await FeedbackModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFeedback) return res.status(404).json({ error: "Feedback with the given ID not found" });
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE a specific feedback
export const deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFeedback = await FeedbackModel.findByIdAndDelete(id);
        if (!deletedFeedback) return res.status(404).json({ error: "Feedback with the given ID not found" });
        res.status(200).json(deletedFeedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
