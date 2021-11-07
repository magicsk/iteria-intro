import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://actual-stud-78.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'GjXVwnbaza3HI1oNcIofwJTFcJyz157gtzg13uAdaZF83xbTedOtX8mGnzRHZ8rh',
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

export default client;
