
const usuariosC ={}
const usuario = require('../models/usuario')

usuariosC.getUsuarios = async (req, res) => {
    const usuarios =  await usuario.find()
    res.json(usuarios)  
}
usuariosC.createUsuario =(req, res) => {
    res.send('create usuarios')
}

usuariosC.getUsuario =(req, res) => {}
usuariosC.borrarUsuario =(req, res) => {}
usuariosC.editUsuario =(req, res) => {}

module.exports = usuariosC;
