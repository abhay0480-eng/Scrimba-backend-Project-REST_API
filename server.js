import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONData } from './utils/sendJSONData.js'
import getFilteredUrlPathName from './utils/getFilteredUrlPathName.js'
import getFilteredUrlQueryParams from './utils/getFilteredUrlQueryParams.js'
const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    const queryUrlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryParams = Object.fromEntries(queryUrlObj.searchParams)
    if (queryUrlObj.pathname === "/api" && req.method === "GET") {
        const filteredData = getFilteredUrlQueryParams(destinations, queryParams)
        sendJSONData(res, 200, "application/json", filteredData)
    } else if (req.url.startsWith('/api/continent')) {
        const filteredData = getFilteredUrlPathName(req, destinations, 'continent')
        sendJSONData(res, 200, 'application/json', filteredData)
    } else if (req.url.startsWith('/api/country')) {
        const filteredData = getFilteredUrlPathName(req, destinations, 'country')
        sendJSONData(res, 200, 'application/json', filteredData)
    } else {
        sendJSONData(res, 404, 'application/json', { message: 'Not Found', error: 'Invalid URL' })
    }
})

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))