const express = require("express");
const schema= require("./schema/schema");
const { createHandler } = require('graphql-http/lib/use/express');
const connectDatabase = require("./helpers/database/connectDatabase");

const app=express();
connectDatabase();

const handler=createHandler({
	schema
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