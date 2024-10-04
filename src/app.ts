import express from 'express';
import createHttpError from 'http-errors';
import { config } from './config/config';
import { globalErrorHandler, globalErrorHandler2 } from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';

const app = express();

app.get("/", (req, res, next) => {
    const error = createHttpError(400, "something went wrong");
    throw error;
    res.json({ message: "Welcome to my app" });
    
});

app.use(express.json());
app.use("/api/users", userRouter)

app.use(globalErrorHandler);

//app.use(globalErrorHandler2);


export default app;
