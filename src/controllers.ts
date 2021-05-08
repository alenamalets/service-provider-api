import { Request, Response } from 'express';
import Data from './data/requests.json' 

export const getRequests = async (req: Request, res: Response) => {
    return res.json(Data)
}
