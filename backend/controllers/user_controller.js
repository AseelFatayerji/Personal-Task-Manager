const connection = require("../config/db_config");
	
	const getUser = (res,req) => {
		try{
			connection.execute("SELECT * FROM users", [], (error,result)=>{
				if(error) return res.status(500).send(error)
				return res.json({info: result }) 
			}); 
		}
		catch(err){
			return res.status(500).send(err);
		}
	}
	const editUser = (res,req) => {
		try{
			const {item,value,email} = req.params;
			connection.execute("UPDATE users SET ? = ? WHERE email = ?", [item,value,email], (error,result)=>{
				if(error) return res.status(500).send(error)
				return res.json({info: result }) 
			}); 
		}
		catch(err){
			return res.status(500).send(err);
		}
	}

	module.exports = {getUser, editUser};