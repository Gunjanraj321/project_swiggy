const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error:'Access denieed'})
    }
    try{
        const decoded = jwt.verify(token, 'abcd12345678');

        req.userId = decoded.userId;

        next();
    }catch(err){
        return res.status(401).json({error:"invalid token"})
    }
}

module.exports = verifyToken;