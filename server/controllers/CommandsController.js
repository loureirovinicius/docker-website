import Commands from "../models/Commands.js";

class CommandsController{
    
    async index(req, res) {

        const { technology } = req.query

        if (technology !== undefined) {
            const notes = await Commands.find({technology})
            return res.json(notes)
        }

        const notes = await Commands.find({})
        return res.json(notes)
    }

    async store(req, res) {
        const { title, command, description, reference, technology } = req.body

        const commandNote = await Commands.create({
            title,
            command,
            description,
            reference,
            technology
        })
        
        return res.status(200).json({ message: 'Note created!' })    
    }

    async update(req, res) {
        const { note_id } = req.params
        const { title, command, description, reference, technology } = req.body 
        
        const note = Commands.findById(note_id)

        if (!note) {
            res.status(400).send({ error: "This note doesn't exist!" })
        }

        await Commands.updateOne({ _id: note_id }, {
            title,
            command,
            description,
            reference,
            technology
        })

        return res.json({ message: "Nota updated!" })
    }

    async delete(req, res) {

        const { house_id } = req.body

        await Commands.findByIdAndDelete({ _id: house_id })

        return res.json({ message: "Note deleted!" })
    }
}

export default new CommandsController()