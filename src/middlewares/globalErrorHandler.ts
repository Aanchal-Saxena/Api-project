import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

export const globalErrorHandler = ((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.log("Inside GEH 1");
   
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        statusCode: statusCode
    });

});

export const globalErrorHandler2 = ((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.log("Inside GEH 2");
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        statusCode: statusCode
    });
});


