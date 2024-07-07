let Arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minIndeks = 0;
let minDəyər = Arr[0];

for (let i = 1; i < Arr.length; i++) {
    if (Arr[i] < minDəyər) {
        minDəyər = Arr[i];
        minIndeks = i;
    }
}
console.log(minIndeks);
