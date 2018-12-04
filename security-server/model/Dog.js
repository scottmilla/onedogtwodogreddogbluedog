const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt-nodejs');


const DogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    attributes: {
        type: Array,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    photo: { 

    },

    location: {
        type: Number,
        required: true
    }

//   email: {
//     type: String,
//     lowercase: true,
//     unique: true,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   profile: {
//     firstName: { type: String },
//     lastName: { type: String }
//   },
//   resetPasswordToken: { type: String },
//   resetPasswordExpires: { type: Date }
},
  {
    timestamps: true,
  });

// Pre-save of user to database, hash password if password is modified or new
// DogSchema.pre('save', function (next) {
//   const user = this,
//     SALT_FACTOR = 5;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, null, function (err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

DogSchema.methods.toJson = function () {
  return {
    _id: this.id,
    name: this.name,
    attributes: this.attributes,
    breed: this.breed,
    summary: this.summary,
    location: this.location
    // firstName: this.profile.firstName,
    // lastName: this.profile.lastName,
    // email: this.email,
    // role: this.role,
    // provider: this.provider
  }
}
module.exports = mongoose.model('Dog', DogSchema);
