import Mongoose from "mongoose"
import Express from "express";
export const apiRouter = Express.Router();


apiRouter.use(Express.json());
apiRouter.use((req, res, next) => {
	Mongoose.connect("mongodb://localhost/");
	next();
});