import { Router } from "express";
import FeedbackModel from "../models/feedback.model.js";

const feedbacksRouter = Router();

feedbacksRouter.get('/', (req, res) => {
    res.json({mssg: "Feedback found"});
});

feedbacksRouter.post('/', async (req, res) => {
    try {
        const { comment, stars, image_url } = req.body;
        const feedback = await FeedbackModel.create({comment, stars, image_url});
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({error: error.message});
    }   
});

feedbacksRouter.put('/:id', (req, res) => {
    res.json({mssg: "Feedback Updated"});
});

feedbacksRouter.delete('/:id', (req, res) => {
    res.json({mssg: "Feedback Deleted"});
});

export default feedbacksRouter;
