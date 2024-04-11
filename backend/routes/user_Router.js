const express = require("express");
const {getUser, editUser} = require("../controllers/user_controller")

const router = express.Router();
	
	router.get("/", getUser);

	router.post("/", editUser);

	router.delete("/:email", (req, res) => {
		const {email} = req.params
		res.send(email);		
	});
	module.exports = router