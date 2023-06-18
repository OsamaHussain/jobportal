const jobModel = require('../models/jobModel');

const insertPost = async (req, res)=>{
    try {
        const {title, description, location, salary, timing, experience, skills, user_id} = req.body;
        const post = await new jobModel({title, description, location, salary, timing, experience, skills, user_id}).save().then(()=>{
            return res.send("Post Successfully Published");
        }).catch((error)=>{
            return res.status(401).send("Post Publication Failed");
        });
    } catch(error){
        return res.status(401).send("Post Publication Failed");
    }
}

const deletePost = async (req, res)=>{
    try {
        const id = req.params.id;
        const user = await jobModel.findByIdAndRemove(id).then(()=>{
            return res.send("Post Successfully Deleted");
        }).catch((error)=>{
            return res.status(401).send("Post Deletion Failed");
        });
    } catch(error){
        return res.status(401).send("Post Deletion Failed");
    }
}

const updatePost = async (req, res)=>{
    try {
        const id = req.params.id;
        const {title, description, location, salary, timing, experience, skills, user_id} = req.body;
        const post = await jobModel.findByIdAndUpdate(id, {title, description, location, salary, timing, experience, skills, user_id}).then(()=>{
            return res.send("Post Successfully Updated");
        }).catch((error)=>{
            return res.status(401).send("Post Update Failed");
        });
    } catch(error){
        return res.status(401).send("Post Update Failed");
    }
}

const getAllPosts = async (req, res)=>{
    try {
        const users = await jobModel.find();
        return res.send(users);
    } catch(error){
        return res.status(403).send("Something went wrong");
    }
}


const jobController = {insertPost, deletePost, updatePost, getAllPosts}

module.exports = jobController;