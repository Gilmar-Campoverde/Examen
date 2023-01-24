const {Router} = require('express');
const router = Router()
const usuariosC =require('../controllers/usuarios.controllers');

router.get('/', usuariosC.getUsuarios);
router.post('/', usuariosC.createUsuario);

router.get('/:id', usuariosC.getUsuario);
router.put('/:id', usuariosC.editUsuario);
router.delete('/:id', usuariosC.borrarUsuario);


module.exports = router;
 