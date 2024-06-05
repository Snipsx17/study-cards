import mongoose from 'mongoose';
import { User as userModel } from '../models';
import { dbConnection } from './dbConnection';

interface User {
  username: string;
  email: string;
  password: string;
}

export class DBClient {
  async connect(databaseUri: string) {
    await dbConnection(databaseUri);
  }

  async findUserById(id: string) {}

  async findUserByEmail(email: string) {
    const user = await userModel.findOne({ email });
    return user ? user : null;
  }

  async createUser({ username, email, password }: User): Promise<User> {
    const user = new userModel({
      username,
      email,
      password,
    });
    return await user.save();
  }
}
