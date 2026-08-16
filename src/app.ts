import express from 'express';
import cors from 'cors'; 
import helmet from 'helmet'; 
import compression from 'compression'; 

import healthRoute from './modules/health/health.route.js';
import { authRouter } from './modules/auth/index.js';
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

app.use("/api/",healthRoute);
app.use("/api/auth",authRouter)
export default app;