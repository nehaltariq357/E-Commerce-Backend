import {
  countAddressByUserId,
  createAddress,
  deleteAddress,
  findAddressByIdAndUserId,
  findAddressByUserId,
  unsetDefaultAddress,
  updateAddress,
} from "./address.repository.js";

import type {
  CreateAddressInput,
  UpdateAddressInput,
} from "./address.types.js";

import { prisma } from "../../lib/prisma.js";


// create address

export const createAddressService = async(userId: number,data:CreateAddressInput)=>{
const addressCount = await countAddressByUserId(userId)
// first address automatically set as default

const shouldBeDefault = addressCount===0 || data.isDefault === true
if (shouldBeDefault){
    return prisma.$transaction(async(tx)=>{
        // remove default from existing addresses
        await prisma.address.updateMany({
            where:{
                userId,
                isDefault:true
            },
            data:{
                isDefault:false 
            }
        })

        // create new default address
        return await tx.address.create({
            data:{
                userId,
                fullName:data.fullName,
                phone:data.phone,
                addressLine:data.addressLine,
                city:data.city,
                state:data.state ?? null,
                postalCode:data.postalCode,
                country:data.country,
                isDefault:true
            }
        })

    })
}
return createAddress(userId,data) // create new address
}

// get all user addresses

export const getAddressesService = async(userId:number)=>{
    return await findAddressByUserId(userId)
}

// get single address 

export const getAddressByIdService = async( addressId:number,userId:number)=>{
    const address = await findAddressByIdAndUserId(addressId,userId)

    if(!address){
        throw new Error("Address not found")
    }
    return address
}

// update address

export const updateAddressService = async(addressId:number,data:UpdateAddressInput)=>{

}