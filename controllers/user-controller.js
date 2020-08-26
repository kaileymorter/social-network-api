const { User } = require('../models');

//set up user controller
const userController = {
    //get all users
    getAllUser(req, res) {
        User.find({})
            .populate({
                //popuate users thoughts
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                //popuate users friends
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            // .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },
    //get single user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thought',
                select: '-__v'
            })
            .populate({
                //popuate users friends
                path: 'friends',
                select: '-__v'
            })  
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    //update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // add friend to user's friend list
    addFriend({params}, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true }
        )
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' })
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err))
    },
    // delete friend from user's friend list
    deleteFriend({ params }, res) {
        User.findOneAndDelete({ _id: params.friendId })
        .then(deletedFriend => {
            if (!deletedFriend) {
                return res.status(404).json({ message: 'No friend found with this id!' });
            }
            return User.findOneAndDelete(
                { _id: params.id },
                { $pull: { friends: params.friendId } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
    }
};

module.exports = userController;