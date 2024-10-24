var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// index.ts
var import_express4 = __toESM(require("express"));

// api.ts
var import_mongoose3 = __toESM(require("mongoose"));
var import_express3 = __toESM(require("express"));

// resources/users.ts
var import_mongoose = __toESM(require("mongoose"));
var import_express = __toESM(require("express"));
var schema = new import_mongoose.default.Schema({
  name: { type: String, required: true }
});
var UserModel = import_mongoose.default.model("user", schema);
var userRouter = import_express.default.Router();
userRouter.get("/", async (req, res) => {
  const users = await UserModel.find().exec();
  res.send(users);
});
userRouter.get("/:id", async (req, res) => {
  const users = await UserModel.findById(req.params.id).exec();
  res.send(users);
});
userRouter.post("/", async (req, res) => {
  const newUser = new UserModel(req.body);
  try {
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log("Save to database failed");
    res.status(500);
    res.send({});
  }
});

// resources/events.ts
var import_mongoose2 = __toESM(require("mongoose"));
var import_express2 = __toESM(require("express"));
var schema2 = new import_mongoose2.default.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});
var EventModel = import_mongoose2.default.model("event", schema2);
var eventRouter = import_express2.default.Router();
eventRouter.get("/", async (req, res) => {
  const events = await EventModel.find().exec();
  res.send(events);
});
eventRouter.get("/:id", async (req, res) => {
  const events = await EventModel.findById(req.params.id).exec();
  res.send(events);
});
eventRouter.post("/", async (req, res) => {
  const newEvent = new EventModel(req.body);
  try {
    await newEvent.save();
    res.send(newEvent);
  } catch (err) {
    console.log("Save to database failed");
    res.status(500);
    res.send({});
  }
});

// api.ts
var apiRouter = import_express3.default.Router();
apiRouter.use(import_express3.default.json());
apiRouter.use((req, res, next) => {
  import_mongoose3.default.connect("mongodb://localhost/");
  next();
});
apiRouter.use("/users", userRouter);
apiRouter.use("/events", eventRouter);

// index.ts
var port = 3e3;
var app = (0, import_express4.default)();
app.use((req, res, next) => {
  console.log("Got a request to the url: " + req.url);
  next();
});
app.use(import_express4.default.static("../client/dist"));
app.use("/api", apiRouter);
console.log("Starting server...");
app.listen(port, () => {
  console.log("Server is listening on " + port);
});
