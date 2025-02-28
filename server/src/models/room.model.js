import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
    {
        room_number: {
            type: String,
            required: true,
        },
        room_type: {
            type: String,
            required: true,
        },
        room_description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        }
    }
)

const newRoom = mongoose.model("Room", roomSchema);

export default newRoom;