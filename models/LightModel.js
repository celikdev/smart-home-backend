import mongoose from "mongoose";

const lightModel = mongoose.Schema({
  lightName: String,
  lightStatus: Boolean,
});

const Light = mongoose.model("Lights", lightModel);

export default Light;
