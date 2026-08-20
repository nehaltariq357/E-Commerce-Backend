import type{ Request,Response } from "express";

export const adminTest=(req:Request,res:Response)=>{

    return res.status(200).json({
        success:true,
        message:"Admin access granted",
        user:req.user
    })

}