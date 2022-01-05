import mongoose from "mongoose";
const { Schema, model } = mongoose

const CommandsSchema = new Schema({
    title: String,
    description: String,
    reference: String,
    outdated: Boolean
})

export default model('Commands', CommandsSchema)