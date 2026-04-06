const getFilteredUrlPathName = (req, data, continentName) => {
    const urlPathname = req.url.split('/').pop().toLowerCase()
    const filteredData = data.filter((item) => item[continentName].toLowerCase() === urlPathname)
    return filteredData
}

export default getFilteredUrlPathName   