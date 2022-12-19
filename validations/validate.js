const { check, validationResult } = require("express-validator");

const validate= [
    check ('name', 'El nombre es obligatorio').notEmpty(),
    check ('mode', 'El campo no debe venir vacio').notEmpty(),
    check('equipment', 'El campo se debe llenar').notEmpty(),
    check('exercises', 'Minimo 3 ejercicios').isNumeric(),
    (req, res, next)=>{
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            res.status(403)
            res.send({errors: error.array()})
        }
    }

]

module.exports= validate;