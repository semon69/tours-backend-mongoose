import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './users.interface';
import bcrypt from "bcrypt"
import config from '../../config';

const userSchema = new Schema<TUser, UserModel>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  needsPasswordChange: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ['tours', 'hosts', 'admin'],
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'blocked'],
    default: "open"
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});


userSchema.statics.isUserExists = async function (id: string) {
  const existingTour = await User.findById(id);
  return existingTour;
};

// Pre save middleware / hooks
userSchema.pre("save", async function (next) {
    // const user = this
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds))
    next()
})

// Post save middleware/hooks
userSchema.post('save', async function (doc, next) {
    doc.password = " "
    next()
})


export const User = model<TUser>('User', userSchema);
