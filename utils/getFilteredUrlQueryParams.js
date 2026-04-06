const getFilteredUrlQueryParams = (data, queryParams) => {
    const { continent, country, is_open_to_public } = queryParams
    if (continent) {
        data = data.filter((item) => item.continent.toLowerCase() === continent.toLowerCase())
    }
    if (country) {
        data = data.filter((item) => item.country.toLowerCase() === country.toLowerCase())
    }
    if (is_open_to_public) {
        data = data.filter(destination =>
            destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
        )
    }
    return data
}

export default getFilteredUrlQueryParams