// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://wp-data.hakusingo.com/graphql', // WPGraphQLエンドポイント
  cache: new InMemoryCache(),
});

export default client;
