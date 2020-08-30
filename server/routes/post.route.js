const postController = require('../controllers/post.controller');
const { isAuth, auth, isAdmin } = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const { Router } = require('express');
const router = Router();


router.get('/', postController.getPosts);
router.get('/:id', isAuth, postController.get);
router.post('/create', isAuth, upload,  postController.createPost);
router.put('/edit/:id', isAuth, postController.update);
router.delete('/delete/:id', isAuth, isAdmin, postController.remove);


module.exports = router;
