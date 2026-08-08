import {prisma} from "../../lib/prisma.js"
import type {RegisterInput} from "./auth.types.js"
// Find a user by their email address
export const findUserByEmail = async(email:string)=>{
    
    return await prisma.user.findUnique({
        where:{
            email
        }
    })
}

// Create a new user in the database
export const createUser = async(data: RegisterInput)=>{
    return await prisma.user.create({
        data  
    })
}