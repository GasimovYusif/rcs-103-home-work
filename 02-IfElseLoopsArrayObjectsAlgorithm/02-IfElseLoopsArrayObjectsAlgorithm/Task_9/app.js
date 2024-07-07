let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let min = arr[0];
let max = arr[0];
let sum = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min && arr[i] !== max) {
        sum += arr[i];
    }
}

console.log("Cəm:", sum);
