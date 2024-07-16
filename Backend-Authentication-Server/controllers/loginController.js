const {request, response} = require('express')
const userData = require('../data/userData')
const userModel = require('../models/userModel')

const authenticateUser = async(request, response) => {
    const newEmail = request.params.email;
    const newPwd = request.params.password;
    try{
        let users = await userModel.find()
        if(users.length === 0)
        {
            const initialUser = await userModel.insertMany(userData);
        }
        const expectedUser = await userModel.findOne({email : newEmail});
        if(!expectedUser)
        {
            return response.status(400).json({message: 'User not found'})
        }
        if(newPwd != expectedUser.password)
        {
            return response.status(404).json({message: 'Invalid Password'});
        }
        return response.status(200).json({message : `Authentication Successful`, user : expectedUser})
    }
    catch(error)
    {
        response.status(500).json({message: error.message})
    }
}

module.exports = {authenticateUser}