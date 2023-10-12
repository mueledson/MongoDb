const mongoose = require('mongoose');

const url =  "mongodb+srv://rodrigoexer1:2020Admin@cluster0.2ilevle.mongodb.net/"

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;