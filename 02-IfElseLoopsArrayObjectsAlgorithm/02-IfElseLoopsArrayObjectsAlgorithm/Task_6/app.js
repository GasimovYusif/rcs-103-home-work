let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minIndeks = 0;
let maxIndeks = 0;
let minDəyər = arr[0];
let maxDəyər = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minDəyər) {
        minDəyər = arr[i];
        minIndeks = i;
    }
    if (arr[i] > maxDəyər) {
        maxDəyər = arr[i];
        maxIndeks = i;
    }
}
let temp = arr[minIndeks];
arr[minIndeks] = arr[maxIndeks];
arr[maxIndeks] = temp;

console.log(arr);
