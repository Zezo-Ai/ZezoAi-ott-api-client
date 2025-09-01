export interface ICreateCoupon {
  name: string;
  description: string;
  coupon_code: string;
  discount: number;
  uses?: number;
  max_uses?: number;
  validity?: string | Date;
  type: "percentage" | "amount";
}

export interface IUpdateCoupon extends ICreateCoupon {}

export interface IDeleteCouponAction {
  id: string[];
  action: "active" | "inactive";
}

export interface ICouponQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: string;
  id?: string;
  q?: string;
  slug?: string;
  select?: string;
  filters?: object;
}

export interface ICoupon {
  _id: string;
  name: string;
  description: string;
  discount: number;
  coupon_code?: string;
  uses: number;
  max_uses: number;
  status: boolean;
  validity?: Date;
  user_id?: string[];
  type: string;
}
