const jwt = require('jsonwebtoken');

const jwtAuth = {
    verifyAuth(req, res, next){
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json({message: "No Token Provided"});
        }

        try {
            const decoded = jwt.verify(token, process.env.private_key);
            req.userId = decoded.userId;
            next();
        }catch(error){
            return res.status(401).json({message: "Invalid Token"});
        }
    }
}

module.exports = jwtAuth;