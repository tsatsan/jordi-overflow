import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new Schema({
    firstName: { type: String, reuired: true },
    lastName: { type: String, reuired: true },
    email: { type: String, reuired: true, unique: true, index: true },
    password: { type: String, reuired: true }

})

UserSchema.plugin(uniqueValidator)

export default mongoose.model('User', UserSchema)