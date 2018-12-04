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
    
    otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
    apiRoutes.use('/stuff',otherRoutes);
    apiRoutes.use('/dogs',dogRoutes);
    app.use('/api', apiRoutes);
    dogRoutes.get('/allDogs',dogController.getAllDogs);
    // /api/dogs/allDogs
    dogRoutes.post('/dogRegister',dogController.registerDog);
    // /api/dogs/dogRegister
    dogRoutes.post('/flush',dogController.deleteAllDogs);
    // /api/dogs/flush  --> This flushes out all of the data from the database
};