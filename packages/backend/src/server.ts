import { gql, ApolloServer } from 'apollo-server'

const dataStore = require("./data")

const typeDefs = gql`
enum ShowType {
    MOVIE
    TV
}

type Show {
    type: ShowType!
    title: String!
    notes: String
    watched: Boolean!
    rating: String!
}

# Default GraphQL types
type Query {
    myShows: [Show]!
}
`

const resolvers = {
    // Default GraphQL resolvers
    Query: {
        myShows: (obj, args, context) => {
            // myShows: [Show]! <-- Return array of Shows
            // console.log({ obj, args, context })
            return dataStore.getMyShows()
        }
    },
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Apollo server at ${url}`)
})