const userModel = require('../models/userModel');
// const bcrypt = require('bcrypt-inzi');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const signup = async (req, res)=>{
    try {
        const {name, email, password, user_type} = req.body;
        // const hashedPassword = await bcrypt.stringToHash(password, 10);
        const users = await new userModel({name, email, password, user_type}).save().then(()=>{
            return res.send("User Successfully Registered");
        }).catch((error)=>{
            return res.status(400).send("User Registration Failed");
        });
    } catch(error){
        return res.send(401).send("Something went wrong");
    }
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(401).send("Wrong Email or Password");
        }else {
            //const verifyHash = await bcrypt.verifyHash(password, user.password);
            if (password == user.password) {
                const token = await jwt.sign({ "name": user.name, "email": user.email, "user_id": user._id }, process.env.private_key, );
                return res.send(token);
            }else {
                return res.status(401).send("Wrong Password");
            }
        }
    } catch(error) {
        console.log(error);
        return res.status(403).send("Something went wrong");
    }
}

const getAllUsers = async (req, res)=>{
    try {
        const users = await userModel.find();
        return res.send(users);
    } catch(error){
        return res.status(403).send("Something went wrong");
    }
}


const userController = {signup, login, getAllUsers}

module.exports = userController;