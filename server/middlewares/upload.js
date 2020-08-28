const multer = require('multer');
const { resolve } = require("path");

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, resolve( 'server/public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};
const upload = multer({
    storage,
    fileFilter
}).single('image');

module.exports = upload;
