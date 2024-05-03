const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res)=>{
    const { name , email, password } = req.body;

    try{
        if(!name || !email || !password ){
            return res.status(400).json({
                error: "Please fill all the fields"
            })
        }
        const existingUser = await User.findOne({where : {email}});
        if(existingUser){
            return res.status(400).json({
                error: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, 
            email,
            password:hashedPassword,
        })
        return res.status(200).json({
            message: "User created successfully"
        })
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const login = async (req, res) =>{
    const { email, password} = req.body;

    try{
        const user = await User.findOne({where: {email}});
        if(!user){
            return res.status(400).json({
                error:"User not found , register first"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                error:"Invalid credentials"
            })
        }
        const token = jwt.sign({userId: user.id},'abcd12345678',{expiresIn:'1m'});

        res.status(200).json({message:"login succesful", token: token})
    }catch(err){
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports = { signup, login};