import { Application } from 'express';
import { getRequests } from './controllers';

const mainRoutes = ( app: Application ) => {
    app.post('/skills', getRequests);

};

export { mainRoutes };