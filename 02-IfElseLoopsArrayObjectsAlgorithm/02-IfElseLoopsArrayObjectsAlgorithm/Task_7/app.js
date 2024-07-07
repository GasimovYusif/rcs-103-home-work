let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minEvenIndex = null;
let minEvenValue = Infinity;
let maxOddIndex = null;
let maxOddValue = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (arr[i] < minEvenValue) {
            minEvenValue = arr[i];
            minEvenIndex = i;
        }
    } else {
        if (arr[i] > maxOddValue) {
            maxOddValue = arr[i];
            maxOddIndex = i;
        }
    }
}

if (minEvenIndex !== null && maxOddIndex !== null) {
    [arr[minEvenIndex], arr[maxOddIndex]] = [arr[maxOddIndex], arr[minEvenIndex]];
}

console.log(arr);
