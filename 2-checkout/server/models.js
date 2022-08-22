const db = require('./db.js');

module.exports = {

  post: function(params) {
    let queryString = "INSERT INTO responses (name, email, password) VALUES (?, ?, ?)";
    return db.queryAsync(queryString, params);
  }
}