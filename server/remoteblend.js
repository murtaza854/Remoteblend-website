const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express().disable("x-powered-by");

const {
    COOKIE_SECRET,
    API_URL3,
    PORT,
} = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser(COOKIE_SECRET));

app.use(cors({
    credentials: true,
    origin: [API_URL3]
    // origin: '*'
}));
app.use(express.static('./build'));

// deepcode ignore NoRateLimitingForExpensiveWebOperation: Not a security issue
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

