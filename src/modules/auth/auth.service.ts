import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import type {RegisterInput,LoginInput} from "./auth.types.js"

import {createUser,findUserByEmail,} from "./auth.repository.js"
import {env} from "../../config/env.js"

export const registerUser = async (data:RegisterInput)=>{
    //  check if user already exists

    const existingUser = await findUserByEmail(data.email)

    if(existingUser){
        throw new Error("User already exists")
    }

    const hashedPassword = await bcrypt.hash(data.password,10)

    const user = await createUser({
        ...data,
        password:hashedPassword
    })

    return {
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role

    }
}

export const loginUser  = async(data:LoginInput)=>{
const user =await findUserByEmail (data.email)

if (!user){
    throw new Error("No user found")
}

const isPasswordValid = await bcrypt.compare(
    data.password,
    user.password
)
if (!isPasswordValid) {
  throw new Error("Invalid email or password");
}

const accessToken = jwt.sign(
    {
        userId:user.id,
        role:user.role
    },
    env.JWT_SECRET,
    {
        expiresIn:env.JWT_EXPIRES_IN
    }
)

return {
    user:{
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role
    },
    accessToken,
}
}