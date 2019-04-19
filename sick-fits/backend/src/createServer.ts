import { GraphQLServer } from 'graphql-yoga';
import {mutationResolvers} from './resolvers/Mutation';
import {queryResolvers} from'./resolvers/Query';
import db from './db';

// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation: mutationResolvers,
      Query: queryResolvers,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  });
}

export default createServer;
