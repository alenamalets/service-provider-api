import { Request, Response } from 'express';

export const getRequests = async (req: Request, res: Response) => {
    return res.json('Hello from API')
}
