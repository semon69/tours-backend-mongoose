import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './routes';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { notFound } from './middlewares/notFound';
const app: Application = express()

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app;