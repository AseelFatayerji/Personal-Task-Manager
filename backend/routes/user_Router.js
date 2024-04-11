const express = require("express");
const router = express.Router();
	
	router.get("/", (req, res) => {
		res.send("output");		
	});

	router.post("/", (req, res) => {
		const {email} = req.params
		res.send(email+" testing post");		
	});

	router.put("/:email", (req, res) => {
		const {email} = req.params
		res.send(email);		
	});

	router.delete("/:email", (req, res) => {
		const {email} = req.params
		res.send(email);		
	});
	module.exports = router