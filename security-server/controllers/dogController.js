const Dog = require('../model/Dog');
//========================================
// Login Route
//========================================
// exports.login = function (req, res, next) {
//     User.findOne({ email: req.body.email }, function (err, user) {
//         if (err) { return res.status(400).json({ error: "bad data" }); }
//         if (!user) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }
//         user.comparePassword(req.body.password, function (err, isMatch) {
//             if (err) { return res.status(400).json({ error: "bad data" }); }
//             if (!isMatch) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }

//                 let userInfo = user.toJson();
//                 res.status(200).json({
//                     token: 'Bearer ' + generateToken(userInfo),
//                     user: userInfo
//                 });
//         });
//     });
// }

// exports.authorize = function (req, res, next) {
//     return res.status(200).json({
//         validated: true
//     })
// }
// //========================================
// // Registration Route
// //========================================
// exports.register = function (req, res, next) {
//     // Check for registration errors
//     const email = req.body.email;
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const password = req.body.password;
//     const clientid = req.body.clientid;//Have to pass something in, can be an empty array
//     let authAPIs = req.body.authAPIs;

//     if (!authAPIs)
//         authAPIs = [];
//     if (!clientid)
//         return res.status(422).send({ error: 'No clientid passed to register against.' })
//     if (!email) {
//         return res.status(422).send({ error: 'You must enter an email address.' });
//     }
//     if (!firstName || !lastName) {
//         return res.status(422).send({ error: 'You must enter your full name.' });
//     }
//     if (!password) {
//         return res.status(422).send({ error: 'You must enter a password.' });
//     }

//     User.findOne({ email: email }, function (err, existingUser) {
//         if (err) { return next(err); }
//         if (existingUser) {
//             if (existingUser.auths.clients.filter(function (item) { return item === clientid }).length > 0) {
//                 return res.status(422).send({ error: 'That email address is already in use for this client.' });
//             } else {
//                 existingUser.auths.clients.push(clientid);
//                 for (i = 0; i < authAPIs.length; i++) {
//                     if (existingUser.auths.apis.filter(function (item) {
//                         return item === authAPIs[i]
//                     }).length == 0) {
//                         existingUser.auths.apis.push(authAPIs[i]);
//                     }
//                 }
//                 existingUser.save(function (err, user) {
//                     if (err) { return next(err); }
//                     let userInfo = existingUser.toJson();
//                     res.status(201).json({
//                         token: 'JWT ' + generateToken(userInfo),
//                         user: userInfo
//                     });
//                 });
//             }

//         } else {
//             let user = new User({
//                 email: email,
//                 password: password,
//                 provider: 'local',
//                 roles: ['User'],
//                 auths: { clients: [clientid], apis: authAPIs },
//                 profile: { firstName: firstName, lastName: lastName }
//             });
//             user.save(function (err, user) {
//                 if (err) { return next(err); }
//                 let userInfo = user.toJson();
//                 res.status(201).json({
//                     token: 'JWT ' + generateToken(userInfo),
//                     user: userInfo
//                 });
//             });
//         }
//     });
// }

exports.getDog = function (req, res, next){

}
exports.getAllDogs = function(req,res,next){
    // Dog.find({ location: "10016", function()})
    // res.status(201).json({
    //     // dog: Dog.find({ name: "coco"}).pretty
    // });
    Dog.find({}, function (err, allDogs) {
        res.status(201).json({
            dog: allDogs
        })
    });
}

exports.registerDog = function (req, res, next){
    const name = req.body.name;
    const attributes = req.body.attributes;
    const breed = req.body.breed;
    const summary = req.body.summary;
    const location = req.body.location;
    const organization = req.body.organization;
    if (!name)
        return res.status(422).send ({error: 'No name entered'})
    else if (!attributes)
        return res.status(422).send ({error: 'No attributes entered'})
    else if (!breed)
        return res.status(422).send ({error: 'No breed entered'})
    else if (!summary)
        return res.status(422).send ({error: 'No summary entered'})
    else if (!location)
        return res.status(422).send ({error: 'No location entered'})
    else if (!organization)
        return res.status(422).send ({error: 'No organization entered'})
    
    Dog.findOne({'breed': breed}, function (err, Dog) {
        if (err) { return next(err); }
        else{
            return res.status(422).send ({error:"complete"})
        }
    });
    // Dog.findOne({'breed': breed}, function(err, dog) {
    //     //handle book
    //   })
}