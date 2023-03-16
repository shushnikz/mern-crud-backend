const User = require("../models/userSchema")

const register = async (req, res) => {
    try {
        const newuser = await User(req.body)
        const user = await newuser.save()
        res.send("User Created Successfully")
    } catch (error) {
        return res.status(400).json(error)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password })
        if (user) {
            res.send(user)
        }
        else {
            return res.status(400).json({ message: "invalid credential" })
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}

const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const editUser = async (req, res) => {
    try {
        const users = await User.findById({ _id: req.params.id })
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    const user = req.body
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser)
        res.status(201).json(editUser);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(209).json({ message: "User deleted Successfully" })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = { register, login, addUser, getUser, editUser, updateUser, deleteUser }
