const AuthenticationController = require('./controllers/authentication'),  
      express = require('express'),
      passportService = require('./security/passport');
const dogController = require('./controllers/dogController');
module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router(),
            authRoutes = express.Router(),
            otherRoutes = express.Router();
            dogRoutes = express.Router();

    apiRoutes.use('/auth', authRoutes);
    // /api/auth/register
    authRoutes.post('/register', AuthenticationController.register);
    // /api/auth/login
    authRoutes.post('/login', AuthenticationController.login);
    // /api/auth/authorize
    authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);
    // /api/info
    otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
    apiRoutes.use('/stuff',otherRoutes);
    apiRoutes.use('/dogs',dogRoutes);
    app.use('/api', apiRoutes);
    dogRoutes.get('/allDogs',passportService.requireAuth,dogController.getAllDogs);
    // /api/dogs/allDogs
    dogRoutes.post('/dogRegister',dogController.registerDog);
    // /api/dogs/dogRegister
    // dogRoutes.get('/findDogList',AuthenticationController.getDogs);
    dogRoutes.post('/flush',dogController.deleteAllDogs);
    dogRoutes.get('/getUserDogs',passportService.requireAuth,dogController.findDogsInArray)
    // /api/dogs/flush  --> This flushes out all of the data from the database
    // dogRoutes.get('/environment=:environment&size=:size&energy:=energy',dogController.filterDogs);
    dogRoutes.get('/environment=:environment&size=:size&energy=:energy&pets=:pets&alone=:alone&needs=:needs&allergies=:allergies&age=:age',dogController.filterDogs);
    // &pets=:pets&alone=:alone&needs=:needs&allergies=:allergies
};