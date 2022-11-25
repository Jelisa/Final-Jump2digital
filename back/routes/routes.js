const {Router} = require('express');
const {centersInfoController,centerInfoController} = require('../controller/centerController');
const {categoryInfoController} = require('../controller/categoryController');
const router = Router();


router.get('/centros', centersInfoController);
router.get('/categorias', categoryInfoController);
router.get('/centros/:id', centerInfoController);


module.exports = {router}