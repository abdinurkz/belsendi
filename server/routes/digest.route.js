const digestController = require('../controllers/digest.controller');
const { isAdmin, isAuth } = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const { Router } = require('express');
const router = Router();


router.get('/', isAuth, isAdmin, digestController.getDigests);
router.get('/:id', isAuth, isAdmin, digestController.get);
router.post('/create', isAuth, isAdmin, upload, digestController.createDigest);
router.put('/edit/:id', isAuth, isAdmin, digestController.update);
router.delete('/delete/:id', isAuth, isAdmin, digestController.remove);


module.exports = router;
