import Concepts from "../models/Concepts.js";

class ConceptsController{
    
    async index(req, res) {

        const notes = await Concepts.find({})
        return res.json(notes)
    }

    async store(req, res) {

        const { title, description, reference } = req.body

        const note = await Concepts.create({
            title,
            description,
            reference
        })

        return res.json(note)
    }

    async update(req, res) {

        const { note_id } = req.params
        const { title, description, reference } = req.body

        await Concepts.updateOne({ _id: note_id }, {
            title, 
            description,
            reference
        })

        return res.send({ message: "Nota atualizada com sucesso!" })
    }

    async delete(req, res) {
        
        const { note_id } = req.body

        await Concepts.findByIdAndDelete({ _id: note_id })

        return res.json({ message: 'Nota excluída com sucesso!' })

    }
}

export default new ConceptsController()