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
    getAllUploads(userId: String!): [Upload!]!
}

"""
A hello world Query
"""
type Query {
     hello: String!
}

`

export {schema}
