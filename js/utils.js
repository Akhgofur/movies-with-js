const selectElement = (element, parentElement = document) => 
    parentElement.querySelector(element)

const createDOM = (element) => document.createElement(element);

const getTime = (time) => {
    const date = new Date(time)
    let releaseDate = ''
    releaseDate += `${date.getDate()}`
    releaseDate += `/${date.getMonth()}`
    releaseDate += `/${date.getFullYear()}`
    return releaseDate
}