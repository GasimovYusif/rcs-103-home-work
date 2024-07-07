const router = require("express").Router();
const fs = require("fs");

const readData = () => {
    return JSON.parse(fs.readFileSync("./data/products.json"));
};

const readBasket = () => {
    return JSON.parse(fs.readFileSync("./data/baskets.json"));
};

const writeBasket = (data) => {
    fs.writeFileSync("./data/baskets.json", JSON.stringify(data));
};

router.get("/", (req, res) => {
    const basket = readBasket();
    res.render("basket", { basket });
});

router.post("/add/:id", (req, res) => {
    const products = readData();
    const basket = readBasket();
    const index = products.findIndex(p => p.id == req.params.id);

    if (index !== -1) {
        const foundProduct = products[index];
        const basketIndex = basket.findIndex(b => b.id == req.params.id);

        if (basketIndex !== -1) {
            basket[basketIndex].quantity += 1;
        } else {
            const newBasketItem = {
                ...foundProduct,
                quantity: 1
            };
            basket.push(newBasketItem);
        }

        writeBasket(basket);
        res.json(foundProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

router.delete("/remove/:id", (req, res) => {
    const basket = readBasket();
    const index = basket.findIndex(b => b.id == req.params.id);

    if (index !== -1) {
        const removedItem = basket.splice(index, 1);
        writeBasket(basket);
        res.json(removedItem);
    } else {
        res.status(404).json({ message: "Item not found in basket" });
    }
});

module.exports = router;
