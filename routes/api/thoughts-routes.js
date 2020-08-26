const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    udpateThought,
    deleteThought,
    addReaction,
    deleteReaction

  } = require('../../controllers/thoughts-controller');

// GET thoughts - /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// GET, PUT, & DELETE thoughts - /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(udpateThought)
  .delete(deleteThought);

// POST thoughts - /api/thoughts/:userId
router
  .route('/:userId')
  .post(createThought);

// POST reactions - api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// DELETE reactions - api/thoughts/:thoughtId/reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router