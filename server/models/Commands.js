import mongoose from "mongoose";
const { Schema, model } = mongoose

const CommandsSchema = new Schema({
    title: String,
    command: String,
    description: String,
    reference: String,
    technology: String,
})

export default model('Commands', CommandsSchema)