//TODO: create a card model
import { Schema, model } from 'mongoose';
const cardSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },

    list:{
        type:Schema.Types.ObjectId,
        ref:'List'
    },
    

});
const Board = model('Card', cardSchema);
export default Card;
 