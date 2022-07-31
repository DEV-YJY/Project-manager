// configuration
import { ApolloClient, InMemoryCache } from "@apollo/client";

// create new apollo client instance
const apolloClient = new ApolloClient({
  // passing graphQL uri
  uri: 'http://localhost:3000/api/tasks',
  // apollo client uses the below cache
  cache: new InMemoryCache()
})

export default apolloClient