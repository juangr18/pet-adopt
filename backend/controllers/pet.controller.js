import Response from "express";
import pet from "../models/pet.js";

const registerPet = async (req, res = Response) => {
  const { name, owner, race } = req.body;
  if (!name || !owner || !race)
    return res.status(400).send({
      message: "Incomplete data",
    });

  const petDB = await pet.findOne({ name });

  if (petDB)
    return res.status(400).send({ message: "This name is already taken" });

  const schema = new pet({
    name,
    owner,
    race,
  });

  const result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register pet" });

  res.status(200).send({ result });
};

const adoption = async (req, res = Response) => {
  const { petId, ownerId } = req.body;

  if ((!petId, !ownerId))
    return res.status(400).send({
      message: "Incomplete data",
    });

  const petToAdopt = await pet.findOne({ _id: petId });
  let userOwner = await user.findOne({ _id: ownerId });

  if (!petToAdopt || !userOwner)
    return res.status(400).send({
      message: "Enter a valid user or pet",
    });

  if (petToAdopt.isAdopted) {
    return res.status(400).send({
      message: "This animal has already been adopted",
    });
  }

  petToAdopt.isAdopted = true;
  petToAdopt.owner = userId;
  petToAdopt.registerDate = Date.now();

  await petToAdopt.save();
  res.status(200).send({
    message: "The adoption was succesful",
  });
};

const getPets = async (_, res = Response) => {
  const pets = await pet.find({});

  if (!pets) return res.status(500).send({ message: "No results were found" });

  res.status(200).send({ pets });
};
export { registerPet, getPets, adoption };
