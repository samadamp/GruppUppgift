import Mongoose from "mongoose";
import Express from "express";

interface Event {
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
  
  const schema = new Mongoose.Schema<Event>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    invitedUser: { type: [String], required: false },
    location: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
    max: { type: Number, required: true },
    private: { type: Boolean, required: true },
    creatorId: { type: Number, required: true }
  });

  const EventModel = Mongoose.model("event", schema);

  export const eventRouter = Express.Router();
  
  
  eventRouter.get("/", async (req, res) => {
    const events = await EventModel.find().exec();
    res.send(events);
  });
  
  
  eventRouter.get("/:id", async (req, res) => {
    try {
      const event = await EventModel.findById(req.params.id).exec();
      if (event) {
        res.send(event);
      } else {
        res.status(404).send({ message: "Event not found" });
      }
    } catch (err) {
      res.status(500).send({ message: "Error retrieving event" });
    }
  });
  
  
  eventRouter.post("/", async (req, res) => {
    const newEvent = new EventModel(req.body);
  
    try {
      await newEvent.save();
      res.send(newEvent);
    } catch (err) {
      console.log("Save to database failed");
      res.status(500).send({ message: "Failed to save event" });
    }
  });
  
