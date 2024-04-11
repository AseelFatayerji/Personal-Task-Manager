const connection = require("../config/db_config");
	
	const getUser = (res,req) => {
		try{
			connection.execute("SELECT * FROM users", [], (error,result)=>{
				if(error) return res.status(500).send(error)
				return res.json({items: result}) 
			}); 
		}
		catch(err){
			return res.status(500).send(err);
		}
	}

	module.exports = {
		getUser,
	};