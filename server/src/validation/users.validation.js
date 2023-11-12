const Joi = require('joi')


const userValidationSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  boards: Joi.array().items(Joi.string().hex().length(24)).default([]),
})

const validateCreateUser = async (req, res, next) => {
  try {
    const { error } =  userValidationSchema.validate(req.body)
    if (error) {
      return res.status(400).json(`ValidationError:${error.details[0].message}`)
    } 
    next()
  } catch (error) {
    next(error)
  }
  
  
}

// const validateUpdateUser = async (req, res, next) => {
//   const { username, email, boards } = req.body
//   const { error } = userValidationSchema.validate(
//     username,
//     email,
//     boards
//   )
//   if (error) {
//     console.log(error)
//     return  res.status(400)
//   }
//   next()
// }
module.exports = { validateCreateUser }