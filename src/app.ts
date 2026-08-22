import express from 'express';
import cors from 'cors'; 
import helmet from 'helmet'; 
import compression from 'compression'; 

import healthRoute from './modules/health/health.route.js';
import { authRouter } from './modules/auth/index.js';
import { userRouter } from './modules/user/user.index.js';
import { adminRouter } from './modules/admin/index.js';
import {categoryRouter} from "./modules/category/index.js"
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

//health
app.use("/api/",healthRoute);
//auth
app.use("/api/auth",authRouter)

// user
app.use("/api/users",userRouter)

// adminRouter
app.use("/api/admin",adminRouter)

// categories
app.use("/api/categories",categoryRouter)

export default app;