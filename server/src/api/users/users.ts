import { Context, Next } from 'koa';
import mongoose from 'mongoose';
import User, { UserType } from '../../models/User';

// User List (GET) /api/users
export const list = async (ctx: Context) => {
  const page: string | number = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { username }: UserType = ctx.query;
  const query = {
    ...(username ? { username: { $regex: username } } : {}),
  };

  try {
    const users = await User.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const userCount = await User.countDocuments(query);

    ctx.set('Last-Page', Math.ceil(userCount / 10).toString());
    ctx.body = users;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// Get Profile (GET) /api/users/:id
export const read = async (ctx: Context) => {
  ctx.body = ctx.state.userProfile;
};

// Remove User (DELETE) /api/users/:id
export const remove = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    await User.findByIdAndRemove(id).exec();

    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// Get By ID
export const getById = async (ctx: Context, next: Next) => {
  const { id } = ctx.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    ctx.status = 401;
    return;
  }

  const user = await User.findById(id);

  if (!user) {
    ctx.status = 404;
    return;
  }

  ctx.state.userProfile = user;

  return next();
};
