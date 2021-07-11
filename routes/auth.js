const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.use(express.json())

//CREATE
router.post('/user', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
})

//READ ALL
router.get('/user', async (req, res) => {
    try{
        const getallUser = await User.find()
        res.send(getallUser)
    }
    catch(e){
        res.send(e)
    }    
})

//READ
router.get('/user/:id', async (req, res) => {
    try{
        const getUserById = await User.findById(req.params.id)
        res.send(getUserById)
    }
    catch(e){
        res.send(e)
    }    
})

//UPDATE
router.patch('/user/:id', async (req, res) => {
    try{
        const getUserByIdAndUpdate = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(getUserByIdAndUpdate)
    }
    catch(e){
        res.send(e)
    }    
})

//DELETE
router.delete('/user/:id', async (req, res) => {
    try{
        const getUserByIdAndDelete = await User.findByIdAndDelete(req.params.id)
        res.send(getUserByIdAndDelete)
    }
    catch(e){
        res.send(e)
    }    
})



module.exports = router