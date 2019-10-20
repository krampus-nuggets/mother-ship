// Import - Queries
import { hello, getAllUploads } from "./query";

// Import - Mutations

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    }
}
