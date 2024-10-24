import Mongoose from "mongoose";
import Express from "express";

interface User {
  id: number;
  invitedUser: string[];
  location: string;
  time: string;
  description: string;
  max: number;
  private: boolean;
  creatorId: number;
  name: string;
  image: string;
}

const schema = new Mongoose.Schema<User>({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const UserModel = Mongoose.model("user", schema);

export const userRouter = Express.Router();

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
