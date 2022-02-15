import Response from 'express'
import owner from "../models/owner.js"


const registerOwner = async (req, res = Response) => {
  const {name, email, password} = req.body;
  if (!name || !email || !password)
    return res.status(400).send({
      message: "Incomplete data"
    })

  const schema = new owner({
    name,
    email,
    password
  })

  const result = await schema.save()
  if (!result)
    return res.status(500).send({message: "Failed to register owner"})

  res.status(200).send({result})
}

export {registerOwner}
