import { Context, Next } from 'koa';
import mongoose from 'mongoose';
import Joi, { ObjectSchema, ValidationResult } from 'joi';
import Wedding, { WeddingType } from '../../models/Wedding';

// 웨딩 빌지 추가 (POST) /api/weddings
export const addWedding = async (ctx: Context) => {
  const data: ObjectSchema = Joi.object().keys({
    husband: Joi.string().required(),
    bride: Joi.string().required(),
    reservePay: Joi.number().required(),
    husbandRental: Joi.number().required(),
    husbandCompany: Joi.number().required(),
    husbandAdd: Joi.number().required(),
    husbandToday: Joi.number().required(),
    husbandBouquet: Joi.number().required(),
    husbandCeremony: Joi.number().required(),
    husbandHanbok: Joi.number().required(),
    husbandPlay: Joi.number().required(),
    husbandAnthem: Joi.number().required(),
    husbandModerator: Joi.number().required(),
    husbandOfficiate: Joi.number().required(),
    husbandEtc: Joi.number().required(),
    brideRental: Joi.number().required(),
    brideCompany: Joi.number().required(),
    brideAdd: Joi.number().required(),
    brideToday: Joi.number().required(),
    brideBouquet: Joi.number().required(),
    brideCeremony: Joi.number().required(),
    brideHanbok: Joi.number().required(),
    bridePlay: Joi.number().required(),
    brideAnthem: Joi.number().required(),
    brideModerator: Joi.number().required(),
    brideOfficiate: Joi.number().required(),
    brideEtc: Joi.number().required(),
    sumRental: Joi.number().required(),
    sumCompany: Joi.number().required(),
    sumAdd: Joi.number().required(),
    sumToday: Joi.number().required(),
    sumBouquet: Joi.number().required(),
    sumCeremony: Joi.number().required(),
    sumHanbok: Joi.number().required(),
    sumPlay: Joi.number().required(),
    sumAnthem: Joi.number().required(),
    sumModerator: Joi.number().required(),
    sumOfficiate: Joi.number().required(),
    sumEtc: Joi.number().required(),
    husbandWedding: Joi.number().required(),
    brideWedding: Joi.number().required(),
    totalWedding: Joi.number().required(),
    mealsPrice: Joi.number().required(),
    husbandNum: Joi.number().required(),
    brideNum: Joi.number().required(),
    sumNum: Joi.number().required(),
    husbandSum: Joi.number().required(),
    brideSum: Joi.number().required(),
    husbandMeal: Joi.number().required(),
    brideMeal: Joi.number().required(),
    totalMeals: Joi.number().required(),
    reserve: Joi.string().required(),
    husbandReserve: Joi.number().required(),
    brideReserve: Joi.number().required(),
    meal: Joi.string().required(),
    weddingAt: Joi.date().required(),
    eventAt: Joi.string().required(),
  });

  const result: ValidationResult<string> = Joi.validate(ctx.request.body, data);

  if (result.error) {
    ctx.status = 400;
    console.log(result.error);
    return;
  }

  try {
    const wedding = new Wedding({
      ...ctx.request.body,
      user: ctx.state.user,
    });

    await wedding.save();

    ctx.body = wedding;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 웨딩 빌지 리스트 (GET) /api/weddings
export const listWeddings = async (ctx: Context) => {
  const page: string | number = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { husband, bride }: WeddingType = ctx.query;
  const query = {
    ...(husband ? { husband: { $regex: husband } } : {}),
    ...(bride ? { bride: { $regex: bride } } : {}),
  };

  try {
    const weddings = await Wedding.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const weddingCount = await Wedding.countDocuments(query);

    ctx.set('Last-Page', Math.ceil(weddingCount / 10).toString());
    ctx.body = weddings;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 웨딩 빌지 세부보기 (GET) /api/weddings/:id
export const readWedding = async (ctx: Context) => {
  ctx.body = ctx.state.wedding;
};

// 웨딩 빌지 삭제 (DELETE) /api/weddings/:id
export const removeWedding = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    await Wedding.findByIdAndRemove(id).exec();

    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 웨딩 빌지 수정 (PATCH) /api/weddings/:id
export const updateWedding = async (ctx: Context) => {
  const { id } = ctx.params;

  const data: ObjectSchema = Joi.object().keys({
    husband: Joi.string(),
    bride: Joi.string(),
    reservePay: Joi.number(),
    husbandRental: Joi.number(),
    husbandCompany: Joi.number(),
    husbandAdd: Joi.number(),
    husbandToday: Joi.number(),
    husbandBouquet: Joi.number(),
    husbandCeremony: Joi.number(),
    husbandHanbok: Joi.number(),
    husbandPlay: Joi.number(),
    husbandAnthem: Joi.number(),
    husbandModerator: Joi.number(),
    husbandOfficiate: Joi.number(),
    husbandEtc: Joi.number(),
    brideRental: Joi.number(),
    brideCompany: Joi.number(),
    brideAdd: Joi.number(),
    brideToday: Joi.number(),
    brideBouquet: Joi.number(),
    brideCeremony: Joi.number(),
    brideHanbok: Joi.number(),
    bridePlay: Joi.number(),
    brideAnthem: Joi.number(),
    brideModerator: Joi.number(),
    brideOfficiate: Joi.number(),
    brideEtc: Joi.number(),
    sumRental: Joi.number(),
    sumCompany: Joi.number(),
    sumAdd: Joi.number(),
    sumToday: Joi.number(),
    sumBouquet: Joi.number(),
    sumCeremony: Joi.number(),
    sumHanbok: Joi.number(),
    sumPlay: Joi.number(),
    sumAnthem: Joi.number(),
    sumModerator: Joi.number(),
    sumOfficiate: Joi.number(),
    sumEtc: Joi.number(),
    husbandWedding: Joi.number(),
    brideWedding: Joi.number(),
    totalWedding: Joi.number(),
    mealsPrice: Joi.number(),
    husbandNum: Joi.number(),
    brideNum: Joi.number(),
    sumNum: Joi.number(),
    husbandSum: Joi.number(),
    brideSum: Joi.number(),
    husbandMeal: Joi.number(),
    brideMeal: Joi.number(),
    totalMeals: Joi.number(),
    reserve: Joi.string(),
    husbandReserve: Joi.number(),
    brideReserve: Joi.number(),
    meal: Joi.string(),
    weddingAt: Joi.date(),
    eventAt: Joi.string(),
  });

  const result: ValidationResult<string> = Joi.validate(ctx.request.body, data);

  if (result.error) {
    ctx.status = 400;
    console.log(result.error);
    return;
  }

  try {
    const newWedding: WeddingType = {
      ...ctx.request.body,
      updatedAt: Date.now(),
    };

    const wedding = await Wedding.findByIdAndUpdate(id, newWedding, {
      new: true,
    }).exec();

    ctx.body = wedding;
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

  try {
    const wedding = await Wedding.findById(id);

    if (!wedding) {
      ctx.status = 404;
      return;
    }

    ctx.state.wedding = wedding;

    return next();
  } catch (err) {
    ctx.throw(500, err);
  }
};
