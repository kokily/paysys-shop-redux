import { Context } from 'koa';
import mongoose from 'mongoose';
import Item, { ItemType } from '../../models/Item';

// 메뉴 리스트 (GET) /api/menu
export const listMenu = async (ctx: Context) => {
  const { native, divide }: ItemType = ctx.query;
  const query = {
    ...(native ? { native } : {}),
    ...(divide ? { divide } : {}),
  };

  try {
    const menu = await Item.find(query).sort({ num: 1 }).exec();

    ctx.body = menu;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// 메뉴 세부보기 (GET) /api/menu/:id
export const readMenu = async (ctx: Context) => {
  const { id } = ctx.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  try {
    const menu = await Item.findById(id).exec();

    if (!menu) {
      ctx.status = 404;
      return;
    }

    ctx.body = menu;
  } catch (err) {
    ctx.throw(500, err);
  }
};
