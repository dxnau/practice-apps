const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/dictionary');

const entrySchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
})

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;