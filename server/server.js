var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
require('dotenv').config();

var port = process.env.SERVER_PORT || 8080;

const estimates = [
    {
        "id": 1,
        "title": "Phantom (from Node)",
        "category": "PC gamer entrée de gamme",
        "prospect": {
            "firstname": "Bender",
            "lastname": "Rogriguez"
        },
        "hardware": {
            "CPU": "AMD Athlon X4 860K",
            "GPU": "AMD Radeon R7 370",
            "RAM": "8 Go DDR3",
            "OS": "Aucun OS",
            "price": "519.95"
        }
    },
    {
        "id": 2,
        "title": "Razorback (from Node)",
        "category": "PC gamer moyenne gamme",
        "prospect": {
            "firstname": "Leela",
            "lastname": "Turanga"
        },
        "hardware": {
            "CPU": "Processeur AMD Ryzen 5 1600",
            "GPU": "NVIDIA GeForce GTX 1060",
            "RAM": "16 Go DDR4",
            "OS": "Windows 10",
            "price": "1099.99"
        }
    },
    {
        "id": 4,
        "title": "Level One X par Canard PC (from Node)",
        "category": "PC gamer entrée de gamme",
        "prospect": {
            "firstname": "Philip",
            "lastname": "Fry"
        },
        "hardware": {
            "CPU": "Processeur AMD Ryzen 3 1200",
            "GPU": "AMD Radeon RX 560",
            "RAM": "8 Go DDR4",
            "OS": "Windows 10",
            "price": "579.95"
        }
    },
    {
        "id": 5,
        "title": "Manticore (from Node)",
        "category": "PC gamer haut gamme",
        "prospect": {
            "firstname": "Zapp",
            "lastname": "Brannigan"
        },
        "hardware": {
            "CPU": "Processeur Intel Core i9 7900X",
            "GPU": "2-SLI Titan XP",
            "RAM": "64 Go DDR4",
            "OS": "Windows 10",
            "price": "6999.95"
        }
    }
];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI 
    }),
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER,
    algorithms: ['RS256']
});

/*
 * Public routes 
 * 
 */ 
app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.get('/api/estimates', (req, res) => {
    res.json(estimates);
});

app.get('/api/estimates/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let results = estimates.filter(estimate => estimate.id === id);
    if(results.length === 0) {
        const error = { status: 400, message: `no estimate with id ${id}`};
        return res.json(error);
    }
    return res.json(results[0]);
});

app.use(jwtCheck);

/*
 * Private routes 
 * 
 */ 
app.get('/api/private/estimates', (req, res) => {
    let deals = [
        {
            "id": 6,
            "title": "Phantom (from Node) SECRET :)",
            "category": "PC gamer entrée de gamme",
            "prospect": {
                "firstname": "Bender",
                "lastname": "Rogriguez"
            },
            "hardware": {
                "CPU": "AMD Athlon X4 860K",
                "GPU": "AMD Radeon R7 370",
                "RAM": "8 Go DDR3",
                "OS": "Aucun OS",
                "price": "519.95"
            }
        },
        {
            "id": 7,
            "title": "Razorback (from Node) SECRET :)",
            "category": "PC gamer moyenne gamme",
            "prospect": {
                "firstname": "Leela",
                "lastname": "Turanga"
            },
            "hardware": {
                "CPU": "Processeur AMD Ryzen 5 1600",
                "GPU": "NVIDIA GeForce GTX 1060",
                "RAM": "16 Go DDR4",
                "OS": "Windows 10",
                "price": "1099.99"
            }
        }
    ];
    res.json(deals);
});

app.listen(port);