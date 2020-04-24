import { Context } from 'koa';
import Joi, { ObjectSchema, ValidationResult } from 'joi';
import User, { UserType, UserSchemaType } from '../../models/User';

// 사원등록 (POST) /api/auth/register
export const register = async (ctx: Context) => {
  const data: ObjectSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(4).required(),
  });

  const result: ValidationResult<string> = Joi.validate(ctx.request.body, data);

  if (result.error) {
    ctx.status = 400;
    console.log(result.error);
    return;
  }

  const { username, password }: UserSchemaType = ctx.request.body;

  try {
    const exists = await User.findByUsername(username);

    if (exists) {
      ctx.status = 409;
      return;
    }

    const user: UserType = new User({ username });

    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 로그인 (POST) /api/auth/login
export const login = async (ctx: Context) => {
  const { username, password }: UserSchemaType = ctx.request.body;

  if (!username || !password) {
    ctx.status = 400;
    ctx.body = '이름 또는 비밀번호를 입력하세요';
    return;
  }

  const data: ObjectSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(4).required(),
  });

  const result: ValidationResult<string> = Joi.validate(ctx.request.body, data);

  if (result.error) {
    ctx.status = 400;
    console.log(result.error);
    return;
  }

  try {
    const user: UserType | null = await User.findByUsername(username);

    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid: boolean = await user.checkPassword(password);

    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();

    ctx.cookies.set('__PAYSYS_AUTH__', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 로그아웃 (POST) /api/auth/logout
export const logout = async (ctx: Context) => {
  ctx.cookies.set('__PAYSYS_AUTH__');
  ctx.status = 204;
};

// 사용자 체크 (GET) /api/auth/check
export const check = async (ctx: Context) => {
  const { user } = ctx.state;

  if (!user) {
    ctx.status = 401;
    return;
  }

  ctx.body = user;
};
