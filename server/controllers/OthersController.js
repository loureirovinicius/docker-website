import Others from "../models/Others.js";

class OthersController{
    
    async index(req, res) {
        const { topic } = req.query

        if (topic !== undefined) {
            const note = await Others.find({topic})
            return res.json(note)
        }

        const note = await Others.find({})
        return res.json(note)
    }

    async store(req, res) { 
        const { title, description, reference, topic } = req.body

        const note = await Others.create({
            title,
            topic,
            reference,
            description
        })

        return res.json(note)
    }

    async update(req, res) {
        const { note_id } = req.params
        const { title, description, reference, topic } = req.body

        await Others.findByIdAndUpdate({ _id: note_id }, {
            title,
            topic,
            reference,
            description
        })

        return res.json({ message: "Nota atualizada com sucesso!" })
    }

    async delete(req, res) {
        const { note_id } = req.body

        await Others.findByIdAndDelete({ _id: note_id })

        return res.json({ message: "Nota excluída com sucesso!" })
    }
}

export default new OthersController()