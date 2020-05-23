const {Router} = require('express');
const router = Router();

const {index} = require('../controllers/index.controller')


router.get('/', index); //Aquí se debe renderizar el index


module.exports = router;