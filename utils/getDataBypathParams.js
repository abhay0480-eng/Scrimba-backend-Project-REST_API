export const getDataByPathParams = (req, destinations, key) => {
    const pathParam = req.url.split('/').pop()
    return destinations.filter((item) => item[key].toLowerCase() === pathParam.toLowerCase())
}