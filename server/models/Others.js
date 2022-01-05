import mongoose from "mongoose";
const { Schema, model } = mongoose

const OthersSchema = new Schema({
    title: String,
    description: String,
    reference: String,
    topic: String
})

export default model('Others', OthersSchema)