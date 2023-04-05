import Koa from 'koa';
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';
import schema from './schema/schema';
import { initDB } from './database';

const app = new Koa();
initDB()

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.listen(3000);