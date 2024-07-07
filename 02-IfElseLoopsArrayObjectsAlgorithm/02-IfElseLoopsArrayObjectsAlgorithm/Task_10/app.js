let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean") {
        const sol = i > 0 ? arr[i - 1] : "Sol yoxdur";
        const sağ = i < arr.length - 1 ? arr[i + 1] : "Sağ yoxdur";
        
        console.log("Sol:", sol);
        console.log("Sağ:", sağ);
    }
}
