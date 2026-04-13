import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendResponse } from './utils/sendResponse.js'
import { getDataByPathParams } from './utils/getDataBypathParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    console.log(urlObj)
    const urlQuery = Object.fromEntries(urlObj.searchParams)

    if (urlObj.pathname.startsWith('/api') && req.method === 'GET') {
        const filteredData = getDatabyQueryParams(destinations, urlQuery)
        sendResponse(res, 200, 'application/json', filteredData)
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const filteredData = getDataByPathParams(req, destinations, 'continent')
        sendResponse(res, 200, 'application/json', filteredData)
    } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const filteredData = getDataByPathParams(req, destinations, 'country')
        sendResponse(res, 200, 'application/json', filteredData)
    } else {
        sendResponse(res, 404, 'application/json', { message: "Not Found", error: "Resource not found" })
    }


})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))