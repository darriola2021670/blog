import { Router } from "express";
import { check } from "express-validator";
import {
    existePublicacionById
  } from '../helpers/db-validator.js';
import { crearPublicacion, editarPublicacion, eliminarPublicacion, obtenerPublicaciones } from './publicacion.controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router();

router.get("/", obtenerPublicaciones);

router.get(
    "/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(existePublicacionById),
        validarCampos,
    ], obtenerPublicaciones);

router.post('/',
    [
        check('nombre', 'Este no es un autor válido').not().isEmpty(),
        check('imageUrl', 'La url de la imagen no es vlaida').isURL(),
        validarCampos
    ], crearPublicacion);

router.put(
    "/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(existePublicacionById),
        check('imageUrl', 'La url de la imagen no es vlaida').optional().isURL(),
        validarCampos,
    ], editarPublicacion);

router.delete('/:id', [validarCampos], eliminarPublicacion);

export default router;
