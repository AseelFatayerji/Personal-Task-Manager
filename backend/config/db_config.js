const mysql= require("mysql2");
	
	const connected = () =>{
		const connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			database: "personal_tracker"
		});
		connection.on("connect",() =>{
			console.log("connected to database");
		});
		connection.once("error", (err) =>{
			console.log(err);
		});
	};
	module.exports = {
		connected
	};