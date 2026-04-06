export const sendJSONData = (res, statusCode, ContentType, data) => {
    res.statusCode = statusCode
    res.setHeader('Content-Type', ContentType)
    res.end(JSON.stringify(data))

}