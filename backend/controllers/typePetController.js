import typePet from "../models/typePet.js"

const registerTypePet = async (req, res) => {
    if(!req.body.race || !req.body.description)
    return res.status(400).send({ message: "Incomplete data"})

    let typePetSchema = new  typePet({
        race: req.body.race,
        description: req.body.description,
        dbStatus: true,
    })

    let result = await typePetSchema.save();
    if(!result)
    return res.status(500).send({ message: " Failed to register typePet"})
    res.status(200).send({ result})

}

export default { registerTypePet}