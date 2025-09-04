import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require:true
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String
  }
})

const User = mongoose.model("User", UserSchema);

export default User