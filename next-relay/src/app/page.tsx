import Link from 'next/link'
import { initRelayEnvironment } from '../RelayEnvironment'

import { graphql, fetchQuery } from "relay-runtime";

import { pageUserQuery } from '../../__generated__/pageUserQuery.graphql';

const relaySetup = async () => {
  const environment = initRelayEnvironment();

  //Define the query Type and the query

  const query = graphql`
    query pageUserQuery($id: String!) {
      user(id: $id) {
        id,
        name,
        birth_date,
        mother_name,
        phone
      }
    }
  `
  // Execute the query.
  const observable = fetchQuery<pageUserQuery>(environment, query, {id: '642e382f986b81f7bc030ffd'});
  const data = await observable.toPromise()

  return data
}

export default async function Home() {
  const user = await relaySetup().then(data => data?.user)

  return (
    <div>
      <h1>Hello Dash</h1>
        <div key={user?.id}>
          <h1>{user?.name}</h1>
          <p>{user?.birth_date}</p>
          <p>{user?.mother_name}</p>
          <p>{user?.phone}</p>
        </div>
      Link to <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
