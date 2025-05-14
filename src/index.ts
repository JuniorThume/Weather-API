import express from 'express';
import 'express-async-error';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import ErrorHandler from './middlewares/ErrorHandler';
import express_rate_limit from './config/erl'
import initializeServer from './config/initialize';

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express_rate_limit);
app.use('/v1/api/', routes);
app.use(errors());
app.use(ErrorHandler);

initializeServer();
