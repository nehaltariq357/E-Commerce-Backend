import express from 'express';
import cors from 'cors';
import helmetModule from "helmet";
import compression from 'compression';
import cookieParser from "cookie-parser";
import healthRoute from './modules/health/health.route.js';
import { authRouter } from './modules/auth/index.js';
import { userRouter } from './modules/user/user.index.js';
import { adminRouter } from './modules/admin/index.js';
import { categoryRouter } from "./modules/category/index.js";
import { productRouter } from './modules/product/index.js';
import { cartRouter } from './modules/cart/index.js';
import { orderRouter } from './modules/order/index.js';
import { AddressRouter } from './modules/address/index.js';
const app = express();
app.use(helmetModule());
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
//health
app.use("/api/", healthRoute);
//auth
app.use("/api/auth", authRouter);
// user
app.use("/api/users", userRouter);
// adminRouter
app.use("/api/admin", adminRouter);
// categories
app.use("/api/categories", categoryRouter);
// product
app.use("/api/products", productRouter);
// cart
app.use("/api/cart", cartRouter);
// address
app.use("/api/addresses", AddressRouter);
// order
app.use("/api/orders", orderRouter);
export default app;
//# sourceMappingURL=app.js.map