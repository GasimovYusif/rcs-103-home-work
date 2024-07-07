function addStringAtIndex(arr, index, str) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        newArr.push(str);
      }
      newArr.push(arr[i]);
    }
  
    if (index >= arr.length) {
      newArr.push(str);
    }
  
    return newArr;
  }
  
  console.log(addStringAtIndex(['a', 'salam', 'b', 'world'], 3, 'dev'));  
  console.log(addStringAtIndex(['a', 'salam', 'b', 'world'], 5, 'dev'));  