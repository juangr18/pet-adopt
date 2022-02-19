import Response from 'express'
import bcrypt from "bcrypt"

import owner from "../models/owner.js"


const registerOwner = async (req, res = Response) => {
  const {name, email, password} = req.body;
  if (!name || !email || !password)
    return res.status(400).send({
      message: "Incomplete data"
    })

  const existingUser = await owner.findOne({email});
  if (existingUser)
    return res.status(400).send({message: "The user is already registered"})

  const passHash = await bcrypt.hash(password, 10)


  const schema = new owner({
    name,
    email,
    password: passHash
  })

  const result = await schema.save()
  if (!result)
    return res.status(500).send({message: "Failed to register owner"})

  res.status(200).send({result})
}

export {registerOwner}
