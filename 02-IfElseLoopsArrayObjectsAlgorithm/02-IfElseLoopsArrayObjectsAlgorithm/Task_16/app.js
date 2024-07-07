function BöyüKiçik(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    return result;
  }
  
  console.log(BöyüKiçik('The Quick Brown Fox')); 
  console.log(BöyüKiçik('saLamNecesen')); 
  