const express = require("express");
const graphqlHTTP=require("express-graphql");

const app=express();

app.use("/graphql", graphqlHTTP({
	schema:,
	
}));

app.listen(4000, ()=>{
	console.log("Server started on 4000 port.");
})
