function joinArr(arr1, arr2, char) {
    let combinedArray = arr1.concat(arr2);
    let resultString = combinedArray.join(char);
    return resultString;
  }
  
  console.log(joinArr([1, 2], [3, 4], '*'));
  console.log(joinArr(['a', 'b'], ['c', 'd'], '-'));  
  console.log(joinArr([5, 6], [7, 8], '#'));
  