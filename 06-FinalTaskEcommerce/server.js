require('dotenv').config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const adminAuth = require("./middleware/adminAuth");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const basketRoutes = require("./routes/basketRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Middleware to add user data to locals for every request
app.use((req, res, next) => {
    res.locals.user = req.cookies.token ? jwt.verify(req.cookies.token, process.env.JWT_SECRET) : null;
    next();
});

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/baskets", basketRoutes);
app.use("/admin", adminAuth, adminRoutes);



const mysql = require('mysql2');

// MySQL serverə qoşulmaq üçün bağlantı parametrləri
const connection = mysql.createConnection({
  host: 'localhost',    // MySQL serverin host adı (localhost-a yerləşirsə)
  user: 'root',         // MySQL istifadəçi adı (default olaraq "root")
  password: 'Qasimov305!', // MySQL istifadəçi parolu (tənzimləməklə təyin olunur)
  database: 'final_task'// İstifadə edəcəyiniz verilənlər bazası adı
});

// MySQL serverə qoşulmaq
connection.connect((err) => {
  if (err) {
    console.error('MySQL serverə qoşula bilmədi: ' + err.stack);
    return;
  }
  console.log('MySQL serverə uğurla qoşulundu (connection id: ' + connection.threadId + ')');
});


// MySQL bağlantısını bağlamaq (proqram bitdikdə)
connection.end();


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
