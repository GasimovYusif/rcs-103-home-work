let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
let longest = "";

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length > longest.length) {
        longest = arr[i];
    }
}

console.log("Ən uzun söz:", longest);
