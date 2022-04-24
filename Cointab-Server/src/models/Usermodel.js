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

const CourierSchema = new mongoose.Schema(
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
const Courier = mongoose.model("Courier",CourierSchema )

module.exports = Courier
module.exports = Pincode