const { Schema, model } = require('mongoose');
const moment = require('moment');

//create the Thought schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//get total reactions from thoughts
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

//create the Thoughts model using the ThoughtSchema
const Thoughts = model('Thoughts', ThoughtSchema);

//export the Thoughts model
module.exports = Thoughts;