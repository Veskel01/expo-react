import { ApolloClient, InMemoryCache } from "@apollo/client";

const GraphQlClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getAllTodos: {
            merge(existing = [], incoming: unknown[]) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default GraphQlClient;
