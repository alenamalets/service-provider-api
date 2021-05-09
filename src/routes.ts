import { Application } from 'express';
import { generateRequests } from './controllers';

const mainRoutes = ( app: Application ) => {
    app.post('/generate-requests', generateRequests);

};

export { mainRoutes };