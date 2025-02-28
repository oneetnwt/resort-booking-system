import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the 'User' collection
            required: true,
        },
        roomID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room", // Reference to the 'Room' collection
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
        }
    },
    { timestamps: true }
)

const newReview = mongoose.model("Review", reviewSchema);

export default newReview;