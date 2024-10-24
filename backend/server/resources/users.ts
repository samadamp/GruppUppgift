import Mongoose from "mongoose";
import Express from "express";

interface User {
  id: number;
  name: string;
  userName: string;
  age: number;
  payment: boolean;
  admin: boolean;
  email: string;
  phone: number;
  event: string[];
  createdEvents: string[];
}

const schema = new Mongoose.Schema<User>({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  age: { type: Number, required: true },
  payment: { type: Boolean, required: true },
  admin: { type: Boolean, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  event: { type: [String], required: false },
  createdEvents: { type: [String], required: false } 
});

const UserModel = Mongoose.model("user", schema);

export const userRouter = Express.Router();


userRouter.get("/", async (req, res) => {
  const users = await UserModel.find().exec();
  res.send(users);
});


userRouter.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).exec();
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving user" });
  }
});


userRouter.post("/", async (req, res) => {
  const newUser = new UserModel(req.body);

  try {
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log("Save to database failed");
    res.status(500).send({ message: "Failed to save user" });
  }
});
