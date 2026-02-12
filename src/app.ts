import express from 'express';
import cors from 'cors';
import appRouter from './routes/router';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
  res.json({ status: 'OK' });
});

app.use(appRouter);
app.use(errorHandler);

export default app;
