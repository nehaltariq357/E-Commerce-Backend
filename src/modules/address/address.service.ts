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
import { th } from "zod/v4/locales/index.js";

// create address

export const createAddressService = async (
  userId: number,
  data: CreateAddressInput,
) => {
  const addressCount = await countAddressByUserId(userId);
  // first address automatically set as default

  const shouldBeDefault = addressCount === 0 || data.isDefault === true;
  if (shouldBeDefault) {
    return prisma.$transaction(async (tx) => {
      // remove default from existing addresses
      await tx.address.updateMany({
        where: {
          userId,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });

      // create new default address
      return await tx.address.create({
        data: {
          userId,
          fullName: data.fullName,
          phone: data.phone,
          addressLine: data.addressLine,
          city: data.city,
          state: data.state ?? null,
          postalCode: data.postalCode,
          country: data.country,
          isDefault: true,
        },
      });
    });
  }
  return createAddress(userId, data); // create new address
};

// get all user addresses

export const getAddressesService = async (userId: number) => {
  return await findAddressByUserId(userId);
};

// get single address

export const getAddressByIdService = async (
  addressId: number,
  userId: number,
) => {
  const address = await findAddressByIdAndUserId(addressId, userId);

  if (!address) {
    throw new Error("Address not found");
  }
  return address;
};

// update address

export const updateAddressService = async (
  userId: number,
  addressId: number,
  data: UpdateAddressInput,
) => {
  const existingAddress = await findAddressByIdAndUserId(addressId, userId);
  if (!existingAddress) {
    throw new Error("Address not found");
  }

  // if setting this address as default

  if (data.isDefault === true) {
    return prisma.$transaction(async (tx) => {
      await tx.address.updateMany({
        where: {
          userId,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
      return await tx.address.update({
        where: {
          id: addressId,
        },
        data: {
          ...(data.fullName !== undefined && {
            fullName: data.fullName,
          }),
          ...(data.phone !== undefined && {
            phone: data.phone,
          }),
          ...(data.addressLine !== undefined && {
            addressLine: data.addressLine,
          }),
          ...(data.city !== undefined && {
            city: data.city,
          }),
          ...(data.state !== undefined && {
            state: data.state,
          }),
          ...(data.postalCode !== undefined && {
            postalCode: data.postalCode,
          }),
          ...(data.country !== undefined && {
            country: data.country,
          }),
          isDefault: true,
        },
      });
    });
  }

  return updateAddress(addressId, data);
};

// delete address

export const deleteAddressService = async(userId:number,addressId:number)=>{
return prisma.$transaction(async(tx)=>{
    // check ownership

    const existingAddress = await findAddressByIdAndUserId(addressId,userId)

    if(!existingAddress){
        throw new Error("Address not found")
    }
    const wasDefault = existingAddress.isDefault
    // delete address
    const deletedAddress = await tx.address.delete({
        where:{
            id:addressId
        }
    })

    // if deleted address was default , make another address default

    if(wasDefault){
        const remaingAddress = await tx.address.findFirst({
            where:{
                userId
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        if(remaingAddress){
            await tx.address.update({
                where:{
                    id:remaingAddress.id
                },
                data:{
                    isDefault:true
                }
            })
        }
    
    }
    return deletedAddress
})
}