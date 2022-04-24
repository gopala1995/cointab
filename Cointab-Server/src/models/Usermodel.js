const mongoose = require("mongoose");

const pincodeSchema = new mongoose.Schema(
  {
    
    Pincode: { type: Number, required: true, },
    zone: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



const Pincode = mongoose.model("user", pincodeSchema);

module.exports = Pincode