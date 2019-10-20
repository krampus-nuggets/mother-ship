// Import - Queries
import { hello, getAllUploads } from "./query";

// Import - Mutations
import { fileUpload } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        getAllUploads: (root, args, context) => getAllUploads(args, context)
    }
}
