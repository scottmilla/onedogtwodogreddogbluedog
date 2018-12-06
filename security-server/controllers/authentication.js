const jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    User = require('../model/user'),
    config = require('../config/config');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

//========================================
// Login Route
//========================================
// exports.findDogList = function(req,res,next){
//     console.log("here")
//     User.findOne({ 'email': req.body.email }, function (err, user) {
//         if (err) { return res.status(400).json({ error: "bad data" }); }
//         let userInfo = user.toJson();
//         res.status(201).json({
//             user: userInfo
//         });
//     });

// }
// exports.getDogs = function (req, res, next){
//     console.log(req.body.email);
//     // User.Update(req.body.email, req.body.array, {
//     //     new: true
//     // },
//     // function(err, model) {
//     //     if (!err) {
//     //         res.status(201).json({
//     //             data: model
//     //         });
//     //     } else {
//     //         res.status(500).json({
//     //             message: "not found any relative data"
//     //         })
//     //     }
//     // });
//     User.findOne({ email: req.body.email }, (err, foundUser) => {
//         foundUser.status(201).json({
//             data: model
//         });
//     })
//     // User.Update({email: req.body.email}, {$set: {array: req.body.array}}, function (err, raw) {});
// }

exports.login = function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { return res.status(400).json({ error: "bad data" }); }
        console.log(req.body.email);
        if (!user) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) { return res.status(400).json({ error: "bad data" }); }
            if (!isMatch) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }

                let userInfo = user.toJson();
                res.status(200).json({
                    token: 'Bearer ' + generateToken(userInfo),
                    user: userInfo
                });
        });
    });
}

exports.authorize = function (req, res, next) {
    console.log("true");
    return res.status(200).json({
        validated: true
    })
}
//========================================
// Registration Route
//========================================
exports.register = function (req, res, next) {
    // Check for registration errors
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const clientid = req.body.clientid;//Have to pass something in, can be an empty array
    const phone = req.body.phone;
    const organization = req.body.organization;
    const recommended = req.body.recommended;
    let authAPIs = req.body.authAPIs;

    if (!authAPIs)
        authAPIs = [];
    if (!clientid)
        return res.status(422).send({ error: 'No clientid passed to register against.' })
    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        if (existingUser) {
            if (existingUser.auths.clients.filter(function (item) { return item === clientid }).length > 0) {
                return res.status(422).send({ error: 'That email address is already in use for this client.' });
            } else {
                existingUser.auths.clients.push(clientid);
                for (i = 0; i < authAPIs.length; i++) {
                    if (existingUser.auths.apis.filter(function (item) {
                        return item === authAPIs[i]
                    }).length == 0) {
                        existingUser.auths.apis.push(authAPIs[i]);
                    }
                }
                existingUser.save(function (err, user) {
                    if (err) { return next(err); }
                    let userInfo = existingUser.toJson();
                    res.status(201).json({
                        token: 'JWT ' + generateToken(userInfo),
                        user: userInfo
                    });
                });
            }

        } else {
            let user = new User({
                email: email,
                password: password,
                phone: phone,
                organization: organization,
                recommended: recommended,
                provider: 'local',
                roles: ['User'],
                auths: { clients: [clientid], apis: authAPIs },
                profile: { firstName: firstName, lastName: lastName }
            });
            user.save(function (err, user) {
                if (err) { return next(err); }
                let userInfo = user.toJson();
                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo
                });
            });
        }
    });
}

