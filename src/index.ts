import cors from 'cors';
import express from 'express';

const app = express()

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const port = parseInt(process.env.PORT, 10) || 9000

// Enable cors
app.use(cors({
    origin: (origin, callback) => callback(null, true),
}));

app.listen(port, () => console.log(`App listening on port ${port}`));


