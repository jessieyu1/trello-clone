//TODO: create a user model
import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    userName:{
        type:String,
    },
    boards:[{
        type:Schema.Types.ObjectId,
        ref:'Board'

    }]
});
const User= model('User', userSchema);
export default User;
 