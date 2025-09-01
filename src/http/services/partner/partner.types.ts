import { IPopulateV1 } from "../sections/sections.types";

export interface IRevenueSetting {
  watchTime: string;
  revenueShare: string;
}

export interface IAddAccountDetails {
  account_number: string;
  ifsc_code: string;
  account_holder_name: string;
  bank_name: string;
  qr_code: string; // key of qr_code in s3 compatible server
}

export interface IUpdateAccountDetails extends IAddAccountDetails {}

export interface IGetAccountDetailsQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: string;
  id?: string;
  q?: string;
  slug?: string;
  select?: string;
  filters?: object;
  populate?: IPopulateV1[];
}

export interface IGetRevenueRequestsQuery extends IGetAccountDetailsQuery {}

export interface IAccountDetails {
  _id: string;
  account_number: string;
  ifsc_code: string;
  account_holder_name: string;
  bank_name: string;
  qr_code: string;
  created_by:
    | {
        _id: string;
        name: string;
        email: string;
        phone: string;
      }
    | string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateRevenueRequest {
  status?: "pending" | "completed" | "rejected" | "onHold";
  transactionId?: string;
  transactionDate?: Date;
  message?: string;
}

export interface IRevenueRequest {
  _id: string;
  name: string;
  amount: number;
  status: "pending" | "completed" | "rejected" | "onHold";
  transactionId: string;
  transactionDate: Date;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  partner:
    | string
    | {
        _id: string;
        name: string;
        email: string;
        phone: string;
      };
}
