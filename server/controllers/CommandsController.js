import Commands from "../models/Commands.js";

class CommandsController{
    
    async index(req, res) {

        const { outdated } = req.query

        if (outdated !== undefined) {
            const notes = await Commands.find({outdated})
            return res.json(notes)
        }

        const notes = await Commands.find({})
        return res.json(notes)
    }

    async store(req, res) {

        const { title, description, reference, outdated } = req.body
        
        const commandNote = await Commands.create({
            title,
            description,
            reference,
            outdated
        })
        
        return res.json(commandNote)
    }

    async update(req, res) {
        const { note_id } = req.params
        const { title, description, reference, outdated } = req.body 
        
        const note = Commands.findById(note_id)

        if (!note) {
            res.status(400).send({ error: "Essa nota não existe" })
        }

        await Commands.updateOne({ _id: note_id }, {
            title,
            description,
            reference,
            outdated
        })

        return res.json({ message: "Nota atualizada com sucesso!" })
    }

    async delete(req, res) {

        const { house_id } = req.body

        await Commands.findByIdAndDelete({ _id: house_id })

        return res.json({ message: "Nota excluída com sucesso!" })
    }
}

export default new CommandsController()