const postController = require('../controllers/post.controller');
const { isAdmin, isAuth } = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const { Router } = require('express');
const router = Router();


router.get('/', isAuth, isAdmin, postController.getPosts);
router.get('/:id', postController.get);
router.post('/create', isAuth, isAdmin, upload, postController.createPost);
router.put('/edit/:id', postController.update);
router.delete('/delete/:id', postController.update);


module.exports = router;
