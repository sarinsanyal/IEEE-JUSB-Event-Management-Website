import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  university?: string;
  department?: string;
  year?: string;
  comparePassword: (password: string) => Promise<boolean>;
} //interface due to TS

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: {type: String, unique: true, required: true},
  university: { type: String },
  department: { type: String },
  year: { type: String },
});

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err as mongoose.CallbackError);
  }
});

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
