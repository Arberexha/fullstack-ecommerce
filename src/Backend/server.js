const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const fs = require('fs');  

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});
 
const contact_db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contact_form"
});


contact_db.connect((err) => {
    if (err) {
        console.error("Error connecting to the contact_form database:", err);
        return;
    }
    console.log("Connected to the contact_form database.");
});


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error during signup:", err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Error during login:", err);
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';

    db_1.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting message into database:', err);
            return res.status(500).send('Failed to send message');
        }
        res.send('Message sent successfully');
    });
});



app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
