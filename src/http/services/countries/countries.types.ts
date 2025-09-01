import { IPopulateV1 } from "../sections/sections.types";

export interface ICountry {
  _id: string;
  name: string;
  country_code: string;
  phone_code: string;
  continent: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateCountryPayload {
  name: string;
  country_code: string;
  phone_code: string;
}

export interface IGetCountriesQuery {
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
