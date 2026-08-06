import type {Request,Response} from 'express';

export const getHealth = (req: Request, res: Response) => {
res.status(200).json({
    success:true,
    message:"API is healthy",
    timestamp:new Date().toISOString(),
    enivronment:process.env.NODE_ENV,
    uptime:process.uptime()  
})
}