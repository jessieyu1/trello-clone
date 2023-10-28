//TODO: create a board model done
import { Schema, model } from 'mongoose';
const boardSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    lists:[{
        type:Schema.Types.ObjectId,
        ref:'List'
    }]
});
const Board = model('Board', boardSchema);
export default Board;
 