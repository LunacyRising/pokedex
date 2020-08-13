

export const removeDuplicates = (arr, key) => {
    let set = new Set();
    return arr.filter(obj => !set.has(obj.data[key]) && set.add(obj.data[key]));
}

//temporal :3
export const removeDuplicates2 = (arr, key) => {
    let set = new Set();
    return arr.filter(obj => !set.has(obj[key]) && set.add(obj[key]));
}