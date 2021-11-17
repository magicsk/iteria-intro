import {
  ApolloClient, ApolloLink, DefaultOptions, HttpLink, InMemoryCache,
} from '@apollo/client';

const secret = process.env.REACT_APP_HASURA_ADMIN_SECRET;

const httpLink = new HttpLink({
  uri: 'https://actual-stud-78.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': secret,
  },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
  defaultOptions: defaultOptions,
});

export default client;
