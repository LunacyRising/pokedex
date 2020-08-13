

export const matchingAbilitites = ( arr1, arr2 ) => {
    let newArr = [];
    const length1 = arr1.length;
    const length2 = arr2.length;
    for(let i = 0; i < length1; i++){
        for(let j = 0; j < length2 ; j++){
            if(arr1[i].name === arr2[j].name){
                newArr.push(arr1[i])
            }
        }
    }
    return newArr  
}