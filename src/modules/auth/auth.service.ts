import bcrypt from "bcrypt"

import type {RegisterInput} from "./auth.types.js"

import {createUser,findUserByEmail,} from "./auth.repository.js"

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