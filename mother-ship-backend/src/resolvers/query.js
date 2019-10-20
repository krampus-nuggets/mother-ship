import *  as dynamoLib from "../../resources/libs/dynamodb-lib";

export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getAllUploads = async (args, context) => {
    const params = {
        TableName: process.env.MotherShipTable
    }
    try {
        const result = await dynamoLib.call("scan", params);
        result.Items.map((item) => (
            {
                userId: item.pk,
                itemId: item.sk,
                title: item.title,
                fileSize: item.fileSize,
                fileURL: item.fileURL,
                dateUploaded: item.dateUploaded,
                fileType: item.fileType
            }
        ))
    }
    catch (e) {
        return e
    }
}