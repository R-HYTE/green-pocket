import { Router } from "express";
import { deleteFeedback, getFeedback, getFeedbacks, patchFeedback, postFeedback } from "../controllers/feedback.js";

const feedbacksRouter = Router();

feedbacksRouter.get('/', getFeedbacks);
feedbacksRouter.get('/:id', getFeedback);
feedbacksRouter.post('/', postFeedback);
feedbacksRouter.patch('/:id', patchFeedback);
feedbacksRouter.delete('/:id', deleteFeedback);

export default feedbacksRouter;
