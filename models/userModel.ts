import { Schema,models,model } from 'mongoose';



const UserSchema: Schema = new Schema({

user_id: { 
    type: String, 
    required: true, 
    unique: true 
},
name: { 
    type: String, 
    required: true 
},
email: { 
    type: String, 
    required: true, 
    unique: true 
},
airlinePreference: {
    type: String,
    required: false
}

},{ versionKey: false });

const User = models.user || model('user', UserSchema);

export default User;