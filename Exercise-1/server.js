const express = require("express");
const { createHandler } = require('graphql-http/lib/use/express');
const schema= require("./schema/schema");

const app=express();
const handler=createHandler({
	schema,
	graphiql:true
});

app.get("/", (req, res, next)=>{
	res.send({
		message:"Server successfull"
	})
})

app.use("/graphql", handler);

app.listen(4000, ()=>{
	console.log("Server started on 4000 port.");
})
