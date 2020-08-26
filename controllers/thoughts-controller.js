const { User, Thoughts } = require('../models');

const thoughtsController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    },
    // get a single thought by id
    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },
    // create a new thought and push the created thought's _id to the associated user's thoughts array
    createThought({ params, body }, res) {
        Thoughts.create(body)
        .then(({ _id }) => {
            return User.findByIdAndUpdate({ _id: params.userId }, {$push: { thoughts: _id }}, { new: true });
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.staus(404).json({ message: 'No thoughts found with this id!' })
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err));
    },
    // update a thought by it's id
    udpateThought({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
    },
    // delete thought by it's id
    deleteThought({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtsController;