import { Context, Next } from 'koa';
import mongoose from 'mongoose';
import Joi, { ObjectSchema, ValidationResult } from 'joi';
import aligoapi from 'aligoapi';
import Bill, {
  BillType,
  BillSchemaType,
  BillQueryType,
} from '../../models/Bill';
import { sms_config, sender, receiver } from '../../libs/utils';

// 빌지 추가 (POST) /api/bills
export const addBill = async (ctx: Context) => {
  const data: ObjectSchema = Joi.object().keys({
    title: Joi.string().required(),
    hall: Joi.string().required(),
    etc: Joi.string().required(),
    total: Joi.number().required(),
    list: Joi.array().items({
      native: Joi.string().required(),
      divide: Joi.string().required(),
      name: Joi.string().required(),
      unit: Joi.string().required(),
      price: Joi.number().required(),
      count: Joi.number().required(),
      amount: Joi.number().required(),
    }),
  });

  const result: ValidationResult<string> = Joi.validate(ctx.request.body, data);

  if (result.error) {
    ctx.status = 400;
    console.log(result.error);
    return;
  }

  try {
    const bill: BillType = new Bill({
      ...ctx.request.body,
      user: ctx.state.user,
    });

    await bill.save();

    const { title, hall }: BillSchemaType = ctx.request.body;

    ctx.request.body = {
      sender,
      receiver,
      msg: `[${ctx.state.user.username}] 님이 [${title}] 전표를 전송하셨슴다. -[${hall}]`,
    };

    aligoapi
      .send(ctx.request, sms_config)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));

    ctx.body = bill;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 빌지 리스트 (GET) /api/bills
export const listBill = async (ctx: Context) => {
  const page: string | number = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { title, username }: BillQueryType = ctx.query;
  const query = {
    ...(title ? { title: { $regex: title } } : {}),
    ...(username ? { 'user.username': username } : {}),
  };

  try {
    const bills = await Bill.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const billCount = await Bill.countDocuments(query);

    ctx.set('Last-Page', Math.ceil(billCount / 10).toString());
    ctx.body = bills;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 빌지 세부보기 (GET) /api/bills/:id
export const readBill = async (ctx: Context) => {
  ctx.body = ctx.state.bill;
};

// 빌지 삭제 (DELETE) /api/bills/:id
export const removeBill = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    await Bill.findByIdAndRemove(id).exec();

    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// Add Reserve (Patch) /api/bills/:id
export const addReserve = async (ctx: Context) => {
  const { id } = ctx.params;

  const data: ObjectSchema = Joi.object().keys({
    title: Joi.string(),
    hall: Joi.string(),
    etc: Joi.string(),
    total: Joi.number(),
    list: Joi.array().items({
      native: Joi.string(),
      divide: Joi.string(),
      name: Joi.string(),
      unit: Joi.string(),
      price: Joi.number(),
      count: Joi.number(),
      amount: Joi.number(),
    }),
    reserve: Joi.number(),
  });

  const result: ValidationResult<string> = Joi.validate(ctx.request.body, data);

  if (result.error) {
    ctx.status = 400;
    console.log(result.error);
    return;
  }

  const newBill: BillType = {
    ...ctx.request.body,
    updatedAt: Date.now(),
  };

  try {
    const bill = await Bill.findByIdAndUpdate(id, newBill, {
      new: true,
    }).exec();

    ctx.body = bill;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// Get by ID
export const getById = async (ctx: Context, next: Next) => {
  const { id } = ctx.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  const bill = await Bill.findById(id).exec();

  if (!bill) {
    ctx.status = 404;
    return;
  }

  ctx.state.bill = bill;

  return next();
};

// Own Bill
export const ownBill = (ctx: Context, next: Next) => {
  const { user, bill } = ctx.state;

  if (bill.user._id.toString() !== user._id && user.username !== '김현성') {
    ctx.status = 403;
    return;
  }

  return next();
};
