const {
  createNewUserService,
  findUserByEmailService,
  updateUserPasswordService,
  deleteUserService,
} = require("../service/user.services.js");
const {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  VALIDATION_ERROR,
} = require("../utils/constants.js");
const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateUserId,
} = require("../validation/users.validation.js");
const { generateJwtToken } = require("../utils/jwt.js");
const { hashPassword, validatePassword } = require("../utils/checkPassword.js");

const registerUser = async (req, res, next) => {
  try {
    validateCreateUser(req, res, async () => {
      const { email } = req.body;
      const user = await findUserByEmailService(email);
      if (user) {
        const error = new Error("User already exist");
        error.name = VALIDATION_ERROR;
        return next(error);
      }
      const newUser = await createNewUserService(req.body);
      const token = generateJwtToken({email: newUser.email});
      res.status(201).json({newUser, token});
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    validateCreateUser(req, res, async () => {
      const newUser = req.body;
      const user = await findUserByEmailService(newUser.email);
      if (!user) {
        const error = new Error("User not found");
        error.name = INVALID_EMAIL;
      }
      const isPasswordValid = validatePassword(user.password, newUser.password);
      if (!isPasswordValid) {
        const error = new Error("Invalid password");
        error.name = INVALID_PASSWORD;
        return next(error);
      }
      const token = generateJwtToken({ email: user.email });
      res.status(200).json({user, token});
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    validateUserId(req, res, async () => {
      const userId = req.params.userId;
      validateUpdateUser(req, res, async () => {
        const { password } = req.body;
        const hashedPassword = await hashPassword(password);
        const updateUser=await updateUserPasswordService(userId, hashedPassword);
        if(!updateUser){
          const error = new Error("User not found");
          error.name = NOT_FOUNT_ERROR;
          return next(error);
        }
        res.status(200).json("user updated");
      });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
      validateUserId(req, res, async () => {
      validateDeleteUser(req, res, async () => {
        const deletedUser=await deleteUserService(req.params.userId);
        if(!deletedUser){
          const error = new Error("User not found");
          error.name = NOT_FOUNT_ERROR;
          return next(error);
        }
        res.status(204).json("user deleted");
      });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { registerUser, loginUser, updateUser, deleteUser };
