import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes';
import loginRouter from './routes/login.routes';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use('/api/1.0/user', userRouter);
app.use('/api/1.0/user', loginRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
