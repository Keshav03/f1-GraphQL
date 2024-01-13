const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    id : Number,
    name : String,
    driver1 : Number,
    driver2 : Number,
    reserverDriver : Number,
    principle : String,
    powerUnit : String,
    worldchampionship:Number,
    wins : Number,
    fastestLap : Number,
    polePosition : Number,
    baseIn : String,
    teamColor: String,
  });
  
  module.exports = mongoose.model('Team', teamSchema);
