/* import Express from "express";
import Mongoose from "mongoose";
import { apiRouter } from "./api";

const port = 3000;

const app = Express();

app.use((req, res, next) => {
	console.log("Got a request to the url: " + req.url);
	next();
});

app.use(Express.static("../client/dist"));
app.use("/api", apiRouter);

console.log("Starting server...");

app.listen(port, () => {
	console.log("Server is listening on " + port);
}); */


import Mongoose from "mongoose";
import Express from "express";
import { apiRouter } from "./api";

const port = 3000;

// MongoDB Atlas connection string (hardcoded)
const mongoURI = "mongodb+srv://94sampan:Bf49PuSE9uZ6sJxK@databas.qtcdf.mongodb.net/myDatabase?retryWrites=true&w=majority";

const app = Express();

// Connect to MongoDB Atlas once when the app starts
Mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use((req, res, next) => {
  console.log("Got a request to the url: " + req.url);
  next();
});

app.use(Express.static("../client/dist"));
app.use("/api", apiRouter);

console.log("Starting server...");

app.listen(port, () => {
  console.log("Server is listening on " + port);
});
