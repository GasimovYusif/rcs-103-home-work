function getFirst(arr, n = 1) {
    if (n <= 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < n && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(getFirst([1, 73, 99, 20]));       
console.log(getFirst([1, 73, 99, 20], 2));  
console.log(getFirst([1, 73, 99, 20], 0));
console.log(getFirst([1, 73, 99, 20], 4));
