import Express from "express";
import { userRouter } from "./resources/users";
import { eventRouter } from "./resources/events";
export const apiRouter = Express.Router();

apiRouter.use(Express.json());

apiRouter.use("/users", userRouter);
apiRouter.use("/events", eventRouter);
