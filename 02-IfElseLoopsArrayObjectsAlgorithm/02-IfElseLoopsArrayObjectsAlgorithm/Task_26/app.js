let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

function find(countries) {
  let result = [];

  for (let country of countries) {
    if (country.toLowerCase().startsWith('a') && country.toLowerCase().endsWith('a')) {
      result.push(country);
    }
  }
  
  return result;
}

let countriesA = find(countries);
console.log(countriesA);
