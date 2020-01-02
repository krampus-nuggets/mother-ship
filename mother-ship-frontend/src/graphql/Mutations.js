import gql from 'graphql-tag';

// GraphQL - FileUpload Mutation
export const File_Upload = gql `
    mutation FileUpload(
        $title: String!,
        $fileSize: String!,
        $fileURL: String!,
        $fileType: String!
    ) {
        fileUpload(
            title: $title,
            fileSize: $fileSize,
            fileURL: $fileURL,
            fileType: $fileType
        ) {
            userId
            itemId
            title
            fileSize
            fileURL
            dateUploaded
            fileType
        }
    }
`;