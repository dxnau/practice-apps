const mongoose = require("mongoose");
const axios = require('axios');
const db = require('./db.js');
const express = require("express");
const app = express();

module.exports = {

  getAll: function() {
    return db.find({});
  },

  post: function(entry) {
    const newWord = new db({word: entry.word, definition: entry.definition});
    return newWord.save();
  },

  update: function(entry) {
    console.log('In models, id is: ', entry._id);
    return db.findByIdAndUpdate(entry._id, {word: 'Random Update', definition: 'Random Update'});
  },

  delete: function(entry) {
    return db.deleteOne(entry);
  }
}

