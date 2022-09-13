import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    uuid: {
        type: String
    },
    name: {
        type: String
    }, 
    email: {
        type: String
    }, 
    description: {
        type: String
    }
},
{
    timestamps: true
}
);

const UserModel = model('users', UserSchema);

export default UserModel;