import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ConceptsSchema = new Schema({
    title: String,
    topic: String,
    description: String,
    technology: String,
    reference: String
})

export default model('Concepts', ConceptsSchema)