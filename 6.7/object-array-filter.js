function filter(objects, property, valueProperty) {
    let filteredObject = []
    for (let object of objects) {
        if (object.hasOwnProperty(property) && object[property] === valueProperty)
            filteredObject.push(object)
    }
    if (filteredObject.length === 0)
        return null
    return filteredObject
}

export default {filter}
