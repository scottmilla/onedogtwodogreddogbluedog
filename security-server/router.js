const AuthenticationController = require('./controllers/authentication'),  
      express = require('express'),
      passportService = require('./security/passport');
const dogController = require('./controllers/dogController');
module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router(),
            authRoutes = express.Router(),
            otherRoutes = express.Router();

    apiRoutes.use('/auth', authRoutes);
    // /api/auth/register
    authRoutes.post('/register', AuthenticationController.register);
    // /api/auth/login
    authRoutes.post('/login', AuthenticationController.login);
    // /api/auth/authorize
    authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);
    authRoutes.post('/dogRegister',dogController.registerDog);
    // /api/auth/dogRegister
    authRoutes.get('/allDogs',dogController.getAllDogs);
    // authRoutes.get('/',dogController.getDog);
    authRoutes.delete('/flush',dogController.deleteAllDogs);
    otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
    apiRoutes.use('/stuff',otherRoutes);
    app.use('/api', apiRoutes);
};