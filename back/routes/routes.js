const {Router} = require('express');
const {centerInfoController} = require('../controller/centerController');
const {categoryInfoController} = require('../controller/categoryController');
const router = Router();


router.get('/centros', centerInfoController);
router.get('/categorias', categoryInfoController);
router.get('/productos', () => console.log("TODO"));


module.exports = {router}