

export const removeDuplicates = (arr, key) => {
    let set = new Set();
    return arr.filter(obj => !set.has(obj.data[key]) && set.add(obj.data[key]));
}