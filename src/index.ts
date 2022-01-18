import 'dotenv/config';
import express from 'express';
import routes from './routes';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(routes);
app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on PORT 3333');
});
