import { resolvers as demandsResolvers } from './Demand/Demand';

const resolvers = {
  ...demandsResolvers, 

  Query: {
    ...demandsResolvers.Query,
  }, 
};

export default resolvers;