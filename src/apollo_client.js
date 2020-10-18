import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: "https://8448220119.amiagi.com/graphql"
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  };
});

const apollo_client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
     addTypename: false
   })
});

export default apollo_client;
