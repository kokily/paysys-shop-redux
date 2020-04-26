import mongoose, { Document } from 'mongoose';

export type WeddingSchemaType = {
  _id: mongoose.Types.ObjectId;
} & WeddingType;

export interface WeddingType extends Document {
  husband: string;
  bride: string;
  reservePay: number;
  husbandRental: number;
  husbandCompany: number;
  husbandAdd: number;
  husbandBouquet: number;
  husbandCeremony: number;
  husbandHanbok: number;
  husbandPlay: number;
  husbandAnthem: number;
  husbandModerator: number;
  husbandOfficiate: number;
  husbandEtc: number;
  brideRental: number;
  brideCompany: number;
  brideAdd: number;
  brideBouquet: number;
  brideCeremony: number;
  brideHanbok: number;
  bridePlay: number;
  brideAnthem: number;
  brideModerator: number;
  brideOfficiate: number;
  brideEtc: number;
  sumRental: number;
  sumCompany: number;
  sumAdd: number;
  sumBouquet: number;
  sumCeremony: number;
  sumHanbok: number;
  sumPlay: number;
  sumAnthem: number;
  sumModerator: number;
  sumOfficiate: number;
  sumEtc: number;
  husbandWedding: number;
  brideWedding: number;
  totalWedding: number;
  mealsPrice: number;
  husbandNum: number;
  brideNum: number;
  sumNum: number;
  husbandSum: number;
  brideSum: number;
  husbandMeal: number;
  brideMeal: number;
  totalMeals: number;
  reserve: string;
  husbandReserve: number;
  brideReserve: number;
  meal: string;
  user: {
    _id: mongoose.Types.ObjectId;
    username: string;
  };
  createdAt: string;
  updatedAt?: string;
  weddingAt: string;
}

const weddingSchema = new mongoose.Schema({
  husband: String,
  bride: String,
  reservePay: Number,
  husbandRental: Number,
  husbandCompany: Number,
  husbandAdd: Number,
  husbandBouquet: Number,
  husbandCeremony: Number,
  husbandHanbok: Number,
  husbandPlay: Number,
  husbandAnthem: Number,
  husbandModerator: Number,
  husbandOfficiate: Number,
  husbandEtc: Number,
  brideRental: Number,
  brideCompany: Number,
  brideAdd: Number,
  brideBouquet: Number,
  brideCeremony: Number,
  brideHanbok: Number,
  bridePlay: Number,
  brideAnthem: Number,
  brideModerator: Number,
  brideOfficiate: Number,
  brideEtc: Number,
  sumRental: Number,
  sumCompany: Number,
  sumAdd: Number,
  sumBouquet: Number,
  sumCeremony: Number,
  sumHanbok: Number,
  sumPlay: Number,
  sumAnthem: Number,
  sumModerator: Number,
  sumOfficiate: Number,
  sumEtc: Number,
  husbandWedding: Number,
  brideWedding: Number,
  totalWedding: Number,
  mealsPrice: Number,
  husbandNum: Number,
  brideNum: Number,
  sumNum: Number,
  husbandSum: Number,
  brideSum: Number,
  husbandMeal: Number,
  brideMeal: Number,
  totalMeals: Number,
  reserve: String,
  husbandReserve: Number,
  brideReserve: Number,
  meal: String,
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  weddingAt: Date,
});

export default mongoose.model<WeddingType>('Wedding', weddingSchema);
