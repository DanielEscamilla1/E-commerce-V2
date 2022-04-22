const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//connecting to the database and checking for errors if any are present

mysql://b7c23db6a6ccb1:d02e582d@us-cdbr-east-05.cleardb.net/heroku_9273441edffd70a?reconnect=true

const db = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b7c23db6a6ccb1',
    password: 'd02e582d',
    database: 'heroku_9273441edffd70a'
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

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products;', (err, result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

// app.post('/products', (req, res) => {
//     db.query('SELECT * FROM products;', (err, result) => {
//         if(err) {
//             console.log(err)
//         }else{
//             console.log(res.send(result))
//         }
//     })
// })



app.listen(process.env.PORT || 4000, () => {
    console.log(`console server listening on port 4000`)
})