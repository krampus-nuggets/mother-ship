import uuid from "uuid";
import { format } from 'date-fns';
import * as dynamodbLib from "../../resources/libs/dynamodb-lib";

export const fileUpload = async (args, context) => {
    const params = {
        TableName: process.env.MotherShipTable,
        Item: {
            pk: `userId-${uuid.v1()}`, // **Replace with Cognito Username
            sk: `itemId-${uuid.v1()}`, // Uploaded file ID
            title: args.title, // Frontend - User Input
            fileSize: args.fileSize, // Frontend - User Input
            fileURL: args.fileURL, // Frontend - AWS S3 object-url
            dateUploaded: format(new Date(), "dd'-'LLL'-'yyyy"), // Utilize date-fns for date formatting
            fileType: args.fileType // Frontend - User Input
        }
    }
    try {
        await dynamodbLib.call("put", params);
        // Return values below | Only if successful
        return {
            userId: params.Item.pk,
            itemId: params.Item.sk,
            title: args.title,
            fileSize: args.fileSize,
            fileURL: args.fileURL,
            dateUploaded: params.Item.dateUploaded,
            fileType: args.fileType
        }
    }
    catch (e) {
        return e
    }
}
