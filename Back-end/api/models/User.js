const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
  {
    name: { type: String, require: true, unique: true, index: true },
  },
  { timestamps: { createdAt: 'created_at' } }
);
