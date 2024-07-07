const router = require("express").Router();
const fs = require("fs");

const readFavorites = () => {
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
};

const writeFavorites = (data) => {
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
};

router.get("/", (req, res) => {
    const favorites = readFavorites();
    res.render("favorites", { products: favorites });
});

router.delete("/remove/:id", (req, res) => {
    const favorites = readFavorites();
    const index = favorites.findIndex(f => f.id == req.params.id);
    if (index !== -1) {
        const removedFavorite = favorites.splice(index, 1);
        writeFavorites(favorites);
        res.json(removedFavorite);
    } else {
        res.status(404).json({ message: "Favorite not found" });
    }
});

module.exports = router;
