import Mongoose from "mongoose";
import Express from "express";
import { userRouter } from "./resources/users";
import { eventRouter } from "./resources/events";
export const apiRouter = Express.Router();

apiRouter.use(Express.json());
apiRouter.use((req, res, next) => {
  Mongoose.connect("mongodb://localhost/");
  next();
});

apiRouter.use("/users", userRouter);
apiRouter.use("/events", eventRouter);
