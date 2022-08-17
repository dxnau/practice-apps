require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const models = require("./models.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/dictionary', (req, res) => {
  models.getAll()
    //Retrieved info from database
    .then((response) => {
      console.log('Got info')
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('Error getting info')
      res.sendStatus(404);
    });
});

app.post('/dictionary', (req, res) => {
  models.post(req.body)
    .then((response) => {
      console.log('Posted')
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error posting ', err)
      res.sendStatus(404);
    });
});

app.put('/dictionary', (req, res) => {
  //Call update from models
});

app.delete('/dictionary', (req, res) => {
  models.delete(req.body)
  .then((response) => {
    console.log('Deleted entry')
    res.status(204).send(response);
  })
  .catch((err) => {
    console.log('unable to delete entry');
    res.status(404).send(err);
  });
});

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
