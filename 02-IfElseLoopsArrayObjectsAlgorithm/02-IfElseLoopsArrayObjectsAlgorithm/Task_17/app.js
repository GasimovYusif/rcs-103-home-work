function clear(arr) {
    return arr.filter(function(element) {
      return element;
    });
  }
  console.log(clear([0, 1, false, 2, undefined, '', 3, null])); 
  