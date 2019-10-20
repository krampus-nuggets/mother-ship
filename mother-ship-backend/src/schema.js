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
A hello world Query
"""
type Query {
     hello: String!
}

`

export {schema}
