import Koa from 'koa';
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';
import schema from './schema/schema';
import { initDB } from './database';
import cors from '@koa/cors';

const app = new Koa();
app.use(cors());
initDB()

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.listen(5000);