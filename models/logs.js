// Destructing the Schema and model
const { Schema, model } = require("mongoose");

// creating a new Schema, same thing as mongoose.Schema
const logSchema = new Schema({
  title: { type: String },
  entry: { type: String },
  shipIsBroken: { type: Boolean, default: true },
});

// creating a new model, same thing as mongoose.model
const Log = model("Log", logSchema);

module.exports = Log;
