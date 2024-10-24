import Mongoose from "mongoose"
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
    image: string
}


const schema = new Mongoose.Schema<Event>({
	name: { type: String, required: true },
	image: { type: String, required: true },
});

export const eventRouter = Express.Router();



