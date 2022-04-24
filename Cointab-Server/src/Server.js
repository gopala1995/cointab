const app = require("./index");
const connect = require("./config/db");
const Pincode = require("../src/models/Usermodel")
const Courier = require ("../src/models/Usermodel")

app.get("/pincode", async(req,res)=>{
    const items = await Pincode.find().lean().exec()
    return res.send(items)
} )

app.get("/courier", async(req,res)=>{
    const items = await Courier.find().lean().exec()
    return res.send(items)
} )

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port at 2345");
  } catch (e) {
    console.log(e.message);
  }
});

