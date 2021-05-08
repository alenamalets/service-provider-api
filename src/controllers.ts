import { Request, Response } from 'express';
import * as Service from './services';

export const getRequests = async (req: Request, res: Response) => {
    const payload = req.body.params;
    const data = await Service.getRequests(payload)
    return res.json(data)
}
