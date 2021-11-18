const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { crearPaquete, getPaquetes } = require('../controllers/packages/pack.js');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.use( validarJWT );

router.get('/get', getPaquetes);

router.post(
    '/new',
    [
        check('name','El titulo es obligatorio').not().isEmpty(),
        check('description','El titulo es obligatorio').not().isEmpty(),
        check('statepackage','El titulo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearPaquete
);



module.exports = router;