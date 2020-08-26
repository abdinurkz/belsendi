const { Router } = require('express');
const router = Router();
const postController = require('../controllers/post.controller');


router.get('/', postController.getPosts);
router.get('/:id', postController.get);
router.post('/create', postController.createPost);
router.put('/edit/:id', postController.update);
router.delete('/delete/:id', postController.update);


module.exports = router;
