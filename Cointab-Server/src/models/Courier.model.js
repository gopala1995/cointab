const mongoose = require("mongoose");

const CourierSchema = new mongoose.Schema(
  {
    Pincode: { type: Number, required: true },
    zone: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Courier = mongoose.model("Courier_Company", CourierSchema);

module.exports = Courier;
