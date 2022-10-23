import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import {pool} from './db.js'
import {PORT} from './config.js';

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/users', async(req,res) => {
    const result = await pool.query("SELECT * FROM personajes");
    res.json(result);
})

app.post('/createUser', async(req,res) => {
    const result = await pool.query(`INSERT INTO personajes(name) VALUES ('${req.body.name}')`)
    res.json(result);
})

app.listen(PORT);
console.log('Server port in', PORT);