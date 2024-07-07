function findCharSum(str, char) {
  let sum = 0;
  let found = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      sum += i;
      found = true;
    }
  }

  return found ? sum : -1;
}

console.log(findCharSum('salam', 'a'));
console.log(findCharSum('hello', 'l'));
console.log(findCharSum('world', 'x'));
