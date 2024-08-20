import { User as userModel, Category } from '../models';
import { dbConnection } from './dbConnection';
import { NewCategory, User } from '../types';

export class DBClient {
  async connect(databaseUri: string) {
    await dbConnection(databaseUri);
  }

  async findUserById(id: string) {}

  async findUserByEmail(email: string) {
    const user = await userModel.findOne({ email });
    return user ? user : null;
  }

  async createUser({
    username,
    email,
    password,
  }: User): Promise<User | undefined> {
    try {
      const user = new userModel({
        username,
        email,
        password,
      });
      return await user.save();
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  async addCategory({ category, owner }: NewCategory) {
    const newCategory = new Category({ name: category, owner });
    try {
      return await newCategory.save();
    } catch (error) {
      throw new Error('Error saving category');
    }
  }
}
