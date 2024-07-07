function clearDuplicate(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
  }
  
  console.log(clearDuplicate([1, 2, 1, 2, 3])); 
  console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); 
  