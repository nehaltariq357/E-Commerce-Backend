import z from "zod"
import {addToCartSchema} from "./cart.validation.js"
export type addToCartInput = z.infer<typeof addToCartSchema>;