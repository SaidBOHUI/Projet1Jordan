const mongoose = require('mongoose')
const {UserModel} = require('../models/user')

module.exports = {

    getAllUsers: (req, res) => {
        UserModel.find({}, (err, users) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                console.log(users);
                res.status(200).render('users',{
                    message: 'Users found',
                    users
                })
            }
        })
    },


    getUserById: (req, res) => {
        UserModel.findById({_id: req.params.id}, (err, user) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            }
            else {
                res.status(200).render('user',{
                    message: 'User found',
                    user
                })
            }
        })
    },


    addUser: (req, res) => {
        
        const user = new UserModel({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age
        })
        user.save((err, user) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                res.status(201).redirect('/users')
            }
        })
    },


    updateUser: (req, res) => {
        UserModel.updateOne({ _id: req.body.id},{firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age}, (err, user) => {
            res.json({
                user
            })
        })
    },  

    
    deleteUser: (req, res) => {
        UserModel.deleteOne({ _id: req.body.id}, (err, user) => {
            res.json({
                user
            })
        })
    },


    users: (req, res) => {
       
        res.status(200).render('users', {
            users
        })
    },

    test: (req, res) => {
        res.status(200).render('index',{
        })
    }
}

