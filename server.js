const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//connecting to the database and checking for errors if any are present
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Daniel27!',
    database: 'ecommerce'
});

db.connect(err => {
    if(err) {
        return err
    }else {
        console.log("db connection successful.")
    }
})

app.use(cors());
app.use(express.json());

app.get('/api/users/:username/:password', (req, res) => {
    const reqName = req.params.username
    const reqPass = req.params.password
    console.log(reqName)
    db.query('SELECT * FROM products', (err, result) => {
        if(err) {
            console.log(err)
        }else {
            // res.send(result)
            result.filter(item => {
                if(item.user_name === reqName && item.password === reqPass){
                    console.log(`it's a match`)
                    res.send(item)
                } 
            })
        }
    })
})



app.listen(4000, () => {
    console.log(`console server listening on port 4000`)
})