let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i] === arr[i].toUpperCase()) {
        console.log("Hərfləri böyük olan söz:", arr[i]);
        console.log("İndeksi:", i);
    }
}
