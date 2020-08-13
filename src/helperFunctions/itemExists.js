

export const itemExists = (arr, obj, key) => {
    return arr.some(item => item[key] === obj[key])
}