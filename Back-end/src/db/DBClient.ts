import { User as userModel, Category } from '../models';
import { dbConnection } from './dbConnection';
import { NewCategory, User } from '../types';
import mongoose from 'mongoose';

export class DBClient {
  async connect(databaseUri: string) {
    await dbConnection(databaseUri);
  }

  async findUserById(id: string) {
    try {
      const user = await userModel.findById(id);
      return user;
    } catch (error) {
      throw new Error('User not found');
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await userModel.findOne({ email });
      return user ? user : null;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
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
    try {
      const userExist = await this.findUserById(owner);
      if (!userExist) throw new Error('User not exists');

      const { categories } = (await Category.findOne({ owner })) || {};

      if (!categories) {
        return await new Category({
          categories: [category],
          owner,
        }).save();
      }

      categories.includes(category) || categories.push(category);

      const updatedCategories = await Category.findOneAndUpdate(
        { owner: new mongoose.Types.ObjectId(owner) },
        { categories },
        { new: true }
      );

      return updatedCategories;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Error adding category: ${error.message}`);
    }
  }
}
