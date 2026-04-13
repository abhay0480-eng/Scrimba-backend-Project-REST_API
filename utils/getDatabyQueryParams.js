export const getDatabyQueryParams = (destinations, queryParams) => {
    let filteredData = destinations
    if (queryParams.continent) {
        filteredData = filteredData.filter((item) => item.continent.toLowerCase() === queryParams.continent.toLowerCase())
    }
    if (queryParams.country) {
        filteredData = filteredData.filter((item) => item.country.toLowerCase() === queryParams.country.toLowerCase())
    }
    if (queryParams.is_open_to_public) {
        filteredData = filteredData.filter((item) => item.is_open_to_public === JSON.parse(queryParams.is_open_to_public))
    }
    return filteredData
}