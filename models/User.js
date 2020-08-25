const { Schema, model } = require('mongoose');
const moment = require('moment');

//create the User schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // use REGEX to validate email address
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    ]
},
{
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

//get total count of friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})