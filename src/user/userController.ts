import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => { 
    const { name, email, password } = req.body;
    //u can use express validater lib 
    if (!name || !email || !password)
    {
        const error = createHttpError(400, "All fields are required");
        return next(error);
    }
    res.json({
        message: "User Created"
    })
};

export { createUser };