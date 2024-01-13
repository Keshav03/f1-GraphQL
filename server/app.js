const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { mongoose } = require("mongoose")
// const { connectToDb, getDb } = require("./db")
const schema = require('./schema')
const cors = require('cors')

const uri = "mongodb+srv://keshav:keshav03@graphql.kfjm5bk.mongodb.net/?retryWrites=true&w=majority";

const app = express()

app.use(cors())

mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log("connected to database")
})

app.listen(4000,()=>{
    console.log("Running a GraphQL API server at http://localhost:4000/graphql")    
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
