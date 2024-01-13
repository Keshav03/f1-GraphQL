const mongoose = require('mongoose')
const uri = "mongodb+srv://keshav:keshav03@graphql.kfjm5bk.mongodb.net/?retryWrites=true&w=majority";

let dbConnection

module.exports = {
    connectToDb: async (cb)=>{
        try {
            // Connect the client to the server	(optional starting in v4.7)
            dbConnection = mongoose.connect(uri)
            return cb()
          } 
          catch(err){
              //CATCH ANY ERROR THAT OCCURS
              console.log("ERROR")   
              return cb(err)
          }
    },
    getDb: ()=> dbConnection
 
}