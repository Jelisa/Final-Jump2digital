const {Router} = require('express');
const {centerInfoController} = require('../controller/centerController');
const router = Router();


router.get('/centros', centerInfoController);
router.get('/productos', () => console.log("TODO"));


module.exports = {router}