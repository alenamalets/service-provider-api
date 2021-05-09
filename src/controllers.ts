import { Request, Response } from 'express';
import * as Service from './services';

export const generateRequests = async (req: Request, res: Response) => {
    const payload = req.body.skills;
    const data = await Service.generateRequests(payload)
    return res.json(data)
}
