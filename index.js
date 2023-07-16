const express = require('express')
const bodyParser = require('body-parser');
const db = require('./queries');
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.route('/').get((req, res) => {
    res.json({ info: 'Node.js, Express.js, and Postgre API' })
})

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
    console.log(`app is listening on port ${port} `);
});