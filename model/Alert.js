const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Alert = new Schema({
  Alerta: {
    type: String
  },
  Nome: {
    type: String
  },
  Fone: {
    type: Number
  },
  picture: {
    type: String
  }
},{
    collection: 'alert'
});

module.exports = mongoose.model('Alert', Alert);