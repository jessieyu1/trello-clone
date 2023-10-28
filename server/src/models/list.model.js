//TODO: create a list model
import { Schema, model } from 'mongoose';
const listSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    cards:[{
        type:Schema.Types.ObjectId,
        ref:'Card'
    }]
});
const List = model('List', listSchema);
export default List;
 