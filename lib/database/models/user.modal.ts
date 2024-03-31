
import { Document, Schema, model, models } from "mongoose";

interface User extends Document {
    clerkId: string;
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
    planId?: number; 
    creditBalance?: number;
    photo: string; 
}

const UserSchema = new Schema({
    clerkId : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
       
    },
    lastName : {
        type : String,
       
    },
    planId : {
        type : Number,
        default : 1,
    },
    creditBalance : {
        type : Number,
        default : 10,
    },
    photo : {
        type : String,
      required : true
    }
}) 

const User = models?.user || model("user", UserSchema);

export default User;