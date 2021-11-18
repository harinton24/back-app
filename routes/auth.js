const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authentification/auth.js');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
router.post(
    '/new', 
    [ 
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 8 caracteres').isLength({ min: 8 }),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 8 caracteres').isLength({ min: 8 }),
        validarCampos
    ],
    loginUsuario 
);

router.get('/renew', validarJWT ,revalidarToken );



module.exports = router;