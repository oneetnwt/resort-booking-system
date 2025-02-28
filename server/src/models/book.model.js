import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
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
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const newBooking = mongoose.model("Book", bookSchema);

export default newBooking;
