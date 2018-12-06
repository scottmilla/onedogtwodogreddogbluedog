const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const DogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    attributes: {
        environment:{type: String},
        size: {type: String},
        energy: {type: String},
        pets: {type: String},
        alone:{type: String},
        needs: {type: String},
        allergies: {type: String},
        age: {type:String}
    },
    breed: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    //photo: { },
    organization: {
        type: String,
        required: true
    },
    email: {
     type: String,
<<<<<<< HEAD
     lowercase: true,
     unique: true,
    //  required: true
=======
     lowercase: true
     //required: true
>>>>>>> 0315722b5612419de3add36b5c1902ba93a86e1b
   },
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
    environment: this.attributes.environment,
    size: this.attributes.size,
    energy: this.attributes.energy,
    pets: this.attributes.pets,
    alone: this.attributes.alone,
    needs: this.attributes.needs,
    allergies: this.attributes.allergies,
    age: this.attributes.age,
<<<<<<< HEAD
    email: this.attributes.email
=======
    email: this.email
>>>>>>> 0315722b5612419de3add36b5c1902ba93a86e1b
  }
}
module.exports = mongoose.model('Dog', DogSchema);
