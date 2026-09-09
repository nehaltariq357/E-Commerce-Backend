import type { Request, Response } from "express";
import {
  createAddressService,
  getAddressesService,
  getAddressByIdService,
  updateAddressService,
  deleteAddressService,
} from "./address.service.js";
import {
  createAddressSchema,
  updateAddressSchema,
} from "./address.validation.js";

// creare address

export const createAddress = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const data = createAddressSchema.parse(req.body);
    const address = await createAddressService(req.user.userId, data);
    return res.status(201).json({
      success: true,
      message: "Address created successfully",
      data: address,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create address",
    });
  }
};

// get all my addresses

export const getAddress = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }
    const addresses = await getAddressesService(req.user.userId);
    return res.status(200).json({
      success: true,
      message: "Addresses fetched successfully",
      data: addresses,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to fetch addresses",
    });
  }
};

// get single address

export const getAddressById = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }
    const addressId = Number(req.params.id);
    if (Number.isNaN(addressId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address ID",
      });
    }

    const address = await getAddressByIdService(addressId, req.user.userId);
    return res.status(200).json({
      success: true,
      message: "Address fetched successfully",
      data: address,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to fetch address",
    });
  }
};

// update address

export const updateAddress = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }
    const addressId = Number(req.params.id);
    if (Number.isNaN(addressId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address ID",
      });
    }
    const data = updateAddressSchema.parse(req.body);

    const address = await updateAddressService(
      req.user.userId,
      addressId,
      data,
    );
    return res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: address,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to update address",
    });
  }
};

// delete address

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }
    const addressId = Number(req.params.id);
    if (Number.isNaN(addressId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address ID",
      });
    }
    await deleteAddressService(req.user?.userId, addressId);
    return res.status(200).json({
      success: true,
      message: "Address deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Address not found",
    });
  }
};
