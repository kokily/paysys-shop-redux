import mongoose, { Document, Model } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export type UserSchemaType = {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
};

export interface UserType extends Document {
  username: string;
  hashedPassword: string;
  setPassword: (password: string) => string;
  checkPassword: (password: string) => boolean;
  serialize: () => UserType;
  generateToken: () => string;
}

export interface UserModel extends Model<UserType> {
  findByUsername: (username: string) => UserType;
}

const userSchema = new mongoose.Schema({
  username: String,
  hashedPassword: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.setPassword = async function (
  password: string
): Promise<void> {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

userSchema.methods.checkPassword = async function (
  password: string
): Promise<boolean> {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

userSchema.methods.serialize = function (): UserType {
  const data: UserType = this.toJSON();
  delete data.hashedPassword;
  return data;
};

userSchema.methods.generateToken = function (): string {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    throw new Error('JWT Secret Key Missing!!');
  }

  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

userSchema.statics.findByUsername = function (
  username: string
): Promise<string> {
  return this.findOne({ username });
};

export default mongoose.model<UserType, UserModel>('User', userSchema);
