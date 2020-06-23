const dataStore = require("./data")

import { gql, ApolloServer } from 'apollo-server'
import { Show, Id, User } from "./types/graphql"

const DEMO_USER_ID = "15aebbc3-343a-4434-ab22-6b684d8960ef";

/****************************
 * GraphQL Schema
 ****************************/
const typeDefs = gql`
enum ShowType {
    MOVIE
    TV
}

type User {
    id: String!
    name: String!
    "Set optional 'watched' argument to get the shows the user has or hasn't watched"
    shows(watched: Boolean): [Show]!
}

"A show represents either a movie or TV show"
type Show {
    id: String!
    type: ShowType!
    title: String!
    "User switches this flag when they watch the show"
    watched: Boolean!
    "This is fetched from the OMDB API"
    rating: String
}

type Id {
    id: String!
}

# Default GraphQL types
type Query {
    User: User
    Users: [User]
}

type Mutation {
    addMyShow(title: String!, watched: Boolean, type: String!): Show
    updateMyShow(id: String!, title: String!, watched: Boolean, type: String!): Show
    deleteMyShow(id: String!): Id
}
`

/****************************
 * GraphQL Resolvers
 ****************************/
const resolvers = {
    // Default GraphQL resolvers
    Query: {
        // obj -> passed from parent
        // args -> passed from query 
        // context -> shared across all resolvers for this operation
        User: async (obj, args, context): Promise<User> => {
            return await context.dataSources.api.getUser(DEMO_USER_ID)
        },
        Users: async (obj, args, context): Promise<[User]> => {
            return await context.dataSources.api.getUsers()
        },
    },
    Mutation: {
        addMyShow: async (obj, args: Show, context): Promise<Show> => {
            return await context.dataSources.api.addMyShow(DEMO_USER_ID, args)
        },
        /* GQLWS1 Stage 4 */
        updateMyShow: async (obj, args: Show, context): Promise<Show> => {
            return await context.dataSources.api.updateMyShow(DEMO_USER_ID, args)
        },
        deleteMyShow: async (obj, args: Id, context): Promise<Id> => {
            await context.dataSources.api.deleteMyShow(DEMO_USER_ID, args.id)
            return args
        }
    },

    User: {
        shows: async (obj: User, args: { watched: Boolean }, context): Promise<Show[]> => {
            if (typeof args.watched === "boolean") {
                return obj.shows.filter(show => show.watched === args.watched)
            }
            return obj.shows
        },
    },

    // Custom GraphQL resolvers
    Show: {
        rating: (obj: Show, args, context) => {
            // TODO: Get rating from API
            return "n/a"
        }
    }
}

const cors = {
    origin: "http://localhost:3000",
    credentials: true
};

/****************************
 * GraphQL Server
 ****************************/
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        api: dataStore
    }),
    cors
});

server.listen().then(({ url }) => {
    console.log(`Apollo server at ${url}`)
})