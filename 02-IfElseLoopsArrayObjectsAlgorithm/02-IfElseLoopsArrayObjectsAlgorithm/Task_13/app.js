let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

function countUpper(str) {
    let count = 0;
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }
    return count;
}

arr.forEach((element, index) => {
    if (typeof element === "string" && countUpper(element) > 2) {
        console.log(`Element: ${element}, İndeksi: ${index}`);
    }
});
