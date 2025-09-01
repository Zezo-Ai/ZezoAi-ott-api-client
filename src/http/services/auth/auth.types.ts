export interface ISendOTPPayload {
  phone: string;
  countryCode?: string;
  re_captcha_token?: string;
  provider?: "whatsapp";
}

export interface ISendOTPResponse {
  hash: string;
  phone: string;
}

export interface ISignUpResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
export interface ILoginPayload {
  email: string;
  password: string;
  check?: boolean;
}

export interface IVerifyOtpPayload {
  hash: string;
  otp: number | string;
  phone: number | string;
}

export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface IForgotPasswordPayload {
  email: string;
}

export interface IResetPasswordPayload {
  id: string;
  token: string;
  password: string;
}

export type IRoles = "user" | "admin" | "partner" | "manager";

export interface IWhoami {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: IRoles;
  avatar: string | null;
  sessions?: object[];
  isSubscribed: boolean;
  balance?: number;
  subscription: {
    subscriptionId: string;
    subscriptionDetails: {
      _id: string;
      name: string;
      description: string;
      price: number;
      points: string[];
      duration: string;
      currency: string[];
      status: boolean;
      maxVideoQuality: string;
      created_by: string;
      updated_by: string;
      createdAt: string;
      updatedAt: string;
      isPopular: boolean;
    } | null;
    active_at: string;
    expiresIn: string;
  } | null;
  permissions: {
    permissions: string[];
    resources: string[];
    roles: string[];
  };
}

export interface IRemoveSessionPayload {
  token_id: string;
}

export interface IChangePasswordPayload {
  current_password: string;
  new_password: string;
}

export interface IPopulate {
  path: string;
  select?: string[];
  populate?: IPopulate[];
}

export interface IPaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
}

export declare interface ILoginWithPhonePayload {
  phone: string;
  re_captcha_token?: string;
  countryCode?: string;
}

export declare interface ILoginWithEmailPayload {
  email: string;
  password: string;
}

export declare interface IEmailLoginResponse {
  status: number;
  data: {
    message: string;
    data: {
      user: {
        id: string;
        name: string;
        email: string;
        role: string;
        avatar: string | null;
        createdAt: string;
        updatedAt: string;
      };
      accessToken: string;
      refreshToken: string;
      accessTokenExpiry: string;
    };
  };
}
export declare interface IForgotPasswordResponse {
  status: number;
}

export declare interface IResetPasswordResponse {
  status: number;
}

export declare interface IWhoamiData {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: "user" | "admin" | "partner";
  avatar: string | null;
  sessions: IWhoamiData[];
  isSubscribed: boolean;
  subscription: {
    subscriptionId: string;
    subscriptionDetails: {
      _id: string;
      name: string;
      description: string;
      price: number;
      points: string[];
      duration: string;
      currency: string[];
      status: boolean;
      maxVideoQuality: string;
      created_by: string;
      updated_by: string;
      createdAt: string;
      updatedAt: string;
      isPopular: boolean;
    } | null;
    active_at: string;
    expiresIn: string;
  } | null;
}

export declare interface IWhoamiResponse {
  data: IWhoamiData;
}

export declare interface IUserSession {
  user: IWhoamiData | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
  watchlist?: string[];
}
