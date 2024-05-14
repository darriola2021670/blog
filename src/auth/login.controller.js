import bcryptjs from 'bcryptjs';
import Usuario from '../usuario/usuario.model.js'
import { generarJWT } from '../helpers/generate-jwt.js'; 

export const login = async (req, res) => {
    const { correo, nombre, password } = req.body;

  try {
    let usuario;

    if (correo) {
      usuario = await Usuario.findOne({ correo });
    } else if (nombre) {
      usuario = await Usuario.findOne({ nombre });
    } else {
      return res.status(400).json({
        msg: "Por favor proporcione correo o nombre de usuario para iniciar sesión",
      });
    }

    if (!usuario) {
      return res.status(400).json({
        msg: "Credenciales incorrectas, Correo no existe en la base de datos",
      });
    }
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "El usuario no existe en la base de datos",
      });
    }

    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "La contraseña es incorrecta",
      });
    }

    const token = await generarJWT( usuario.id);

    res.status(200).json({
      msg: 'Login Ok!!!',
      usuario,
      token
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Comuniquese con el administrador",
    });
  }
}