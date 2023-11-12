// const mongoose = require('mongoose')

// module.exports = (error, req, res, next) => {
//   //  console.log(mongoose)
//   if (error.code === 11000) {
//     const field = Object.keys(error.keyPattern)[0]
//     const value = error.keyValue[field]
//     return res.status(409).json({
//       error: 'Conflict',
//       message: `Duplicate key error. ${field} '${value}' already exists.`,
//     })
//   }

//   next(error)
// }
