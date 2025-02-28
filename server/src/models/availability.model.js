import mongoose from 'mongoose';

const roomAvailabilitySchema = new mongoose.Schema(
    {
        room_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
)

const newRoomAvailability = mongoose.model('RoomAvailability', roomAvailabilitySchema);

export default newRoomAvailability;