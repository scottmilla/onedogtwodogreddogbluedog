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
    console.log('breed:', req.params.breed);
    console.log('location:',req.params.location);
    Dog.find({'breed':req.params.breed,'location':req.params.location}, function (err, foundDogs) {
        res.status(201).json({
            dog: foundDogs
        })
    });
}
exports.deleteAllDogs = function(req,res,next){
    Dog.deleteMany({}, function(err, response) {
        if (err){
            res.status(422).send ({error: 'didnt delete dogs'})
        }
    });
    return res.status(422).send ({error: 'deleted dogs'});
}
exports.getAllDogs = function(req,res,next){
    Dog.find({}, function (err, allDogs) {
        res.status(201).json({
            dog: allDogs
        })
    });
}
// function dogToJson(currDog){
//     return currDog.toJson();
// }
exports.getUserDog = function(req,res,next){
    console.log(req.body);
    Dog.find({}, function (err, foundDogs) {
        res.status(201).json({
            dog: foundDogs
        })
    });
}

exports.filterDogs = function(req,res,next){
    console.log("here")
    var items = new Array(res.size);
    var counter = 0;
    var dogAmount =0;
    var dogjson = 'wuddup';
    Dog.find({}, function (err, allDogs) {
        allDogs.forEach(function(currDog) {
            var dogArray = new Array(3);
            console.log(currDog.name);
            console.log(currDog.attributes.environment);
            console.log(req.params.environment);
            dogAmount = 0;
            if ((currDog.attributes.environment==req.params.environment)||(req.params.environment=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.size == req.params.size)||(req.params.size=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.energy == req.params.energy)||(req.params.energy=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.pets == req.params.pets)||(req.params.pets=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.alone == req.params.alone)||(req.params.alone=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.needs == req.params.needs)||(req.params.needs=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.age == req.params.age)||(req.params.age=="NULL")){
                dogAmount +=1;
            }
            if ((currDog.attributes.allergies == req.params.allergies)||(req.params.allergies=="NULL")){
                dogAmount +=1;
            }
            dogArray[0] = currDog.id;
            dogArray[1] = dogAmount;
            dogArray[2] = currDog.name;
            console.log(dogArray);
            items.push(dogArray);
        });
        console.log("before sort: "+items);
        items = items.sort(function(a,b) {
            return a[0] - b[0];
        });
        console.log("after sort: "+items);
        var dogIDs = new Array();
        var i = 0;
        for (i=0;i<items.length-1;i++){
            dogIDs.push(items[i][0]);
        }
        console.log(dogIDs);

        //push dogIDs into user

        // let promiseArr = []
        // items.forEach(function(currDog) {
        //     Dog.findOne({'_id':'5c06a71eaf83855d3db86da1'}, function (err, existingDog){
        //         promiseArr.push(dogToJson(existingDog));
        //         console.log(promiseArr);
        //     });
        // });
        // console.log("PROKAYPR"+promiseArr);
        // Promise.all(promiseArr)
        // .then((result) => res.send(promiseArr))
        // .catch((err) => res.send(err));
        // let promiseArr = [];
        // items.forEach(function(currDog) {
        //     promiseArr.push(currDog.toJson()); 
        // }); 
        // //now execute promise all
        // Promise.all(promiseArr)
        // .then((result) => res.send("success"))
        // .catch((err) => res.send(err));
        
        
        res.status(201).json({
            dog: dogIDs
        })
        
        
        
    });
}
exports.findDogsInArray = function (req,res,next){
    console.log(req.body)
    console.log("here")
    const async = require('async')
// FIX ME: this isn't correctly handled! 
    let results = []
    dogIDs = req.body.array;
    console.log(req.body.array)
    async.each(dogIDs, function(element, callback) {
        // console.log('Processing todo ' + element)
        Dog.findOne({'_id':element}, function (err, existingDog){
            if(err){
                callback(err)
            } else {
                // console.log(results);
                results.push(existingDog)
                callback(null, existingDog)
            }
            
        });


    }, function(err) {
        if(err) {
            console.log('A element failed to process', err)
            res.status(500).json(err)
        } else {
            console.log('All elements have been processed successfully')
            console.log(results)
            // array with the results of each removeTodo job
            res.status(201).json(results) 
        }
    })
}

exports.registerDog = function (req, res, next){
    const name = req.body.name;
    const breed = req.body.breed;
    const environment = req.body.environment;
    const size = req.body.size;
    const energy = req.body.energy;
    const pets = req.body.pets;
    const alone = req.body.alone;
    const needs = req.body.needs;
    const age = req.body.age;
    const allergies = req.body.allergies;
    const summary = req.body.summary;
    const location = req.body.location;
    const organization = req.body.organization;
    if (!name)
        return res.status(422).send ({error: 'No name entered'})
    else if (!breed)
        return res.status(422).send ({error: 'No breed entered'})
    else if (!environment||!size||!energy||!pets||!alone||!needs||!allergies||!age)
        return res.status(422).send ({error: 'Put in all attributes'})
    else if (!summary)
        return res.status(422).send ({error: 'No summary entered'})
    else if (!location)
        return res.status(422).send ({error: 'No location entered'})
    else if (!organization)
        return res.status(422).send ({error: 'No organization entered'})
    
    Dog.findOne({'breed': breed,'organization':organization,'name':name,'age':age}, function (err, existingDog) {
        if (err) { return next(err); }
        else{
            let dog = new Dog({
                name: name,
                // attributes: attributes,
                breed: breed,
                summary: summary,
                location: location,
                attributes: {environment:environment,size:size,energy:energy,pets:pets,alone:alone,needs:needs,age:age,allergies:allergies},
                organization: organization
            });
            dog.save(function (err, user) {
                if (err) { return next(err); }
                let dogInfo = dog.toJson();
                res.status(201).json({
                    dog: dogInfo
                });
            });
        }
    });
}