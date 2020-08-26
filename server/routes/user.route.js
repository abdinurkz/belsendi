const userController = require('../controllers/user.controller');
const { isAdmin, isAuth } = require('../middlewares/auth');
const { Router } = require('express');
const router = Router();


router.get('/', isAuth, isAdmin, userController.getListOfUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/current', isAuth, isAdmin, userController.current);


module.exports = router;
