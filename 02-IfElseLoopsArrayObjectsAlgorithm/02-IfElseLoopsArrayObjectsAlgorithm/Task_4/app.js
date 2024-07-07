let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let max = null;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (max === null || arr[i] > max) {
            max = arr[i];
        }
    }
}
if (max !== null) {
    console.log(max);
} else{
    console.log("Cüt yoxdur");
}