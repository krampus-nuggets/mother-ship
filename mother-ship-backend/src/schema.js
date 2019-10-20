const schema = `

"""
TYPE
"""
type Upload {
    userId: String!,
    itemId: String!,
    title: String!,
    fileSize: String!,
    fileURL: String!,
    dateUploaded: String!,
    fileType: String!
}

"""
QUERY
"""
type Query {
    hello: String!,
    getAllUploads: [Upload],
    getAllUserUploads(userId: String!): [Upload!]!
}

"""
MUTATION
"""
type Mutation {
    fileUpload(
        title: String!,
        fileSize: String!,
        fileURL: String!,
        fileType: String!
    ): Upload
}

`

export {schema}
