const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const driverSchema = new Schema({
        // id : String,
        fname : String,
        lname : String,
        // age: Number,
        // team : Number,
        // country : String,
        // podium : String,
        // wins : String,
        // debut : String,
        // worldchampionship : String,
        // dateOfBirth : Date
  });
  
module.exports = mongoose.model('Driver', driverSchema);
