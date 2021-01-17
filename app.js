const filterOutOdds = (...nums) => nums.filter(x => x % 2 ===0)


// const findMin = (...nums) => nums.reduce((min, currNum) => min < currNum ? min : currNum)
const findMin = (...nums) => Math.min(...nums);

const newObj = (obj1, obj2) =>{
     return {...obj1, ...obj2}
}

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(x => x*2)]



/** remove a random element in the items array
and return a new array without that item. */


const removeRandom = (items) =>{
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index+1)]
}


/** Return a new array with every item in array1 and array2. */


const extend = (arr1, arr2) => [...arr1, ...arr2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */



const addKeyVal = (obj, key, val) => {
    let newO = { ...obj }
    newO[key] = val;
    return newO;
}


/** Return a new object with a key removed. */



const removeKey = (obj, key) =>{
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newO = { ...obj }
    newO[key] = val;
    return newO;
}