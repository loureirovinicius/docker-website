import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ConceptsSchema = new Schema({
    title: String,
    description: String,
    reference: String
})

export default model('Concepts', ConceptsSchema)