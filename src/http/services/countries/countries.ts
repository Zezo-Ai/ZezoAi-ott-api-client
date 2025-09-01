import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICountry,
  ICreateCountryPayload,
  IGetCountriesQuery,
} from "./countries.types";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class CountriesService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Initializes the country setup by making an automatic configuration request.
   *
   * @returns A promise that resolves to the server's response.
   */
  async init() {
    return this.request({
      method: "POST",
      url: "/api/v1/countries/auto-setup",
    });
  }

  /**
   * Creates a new country.
   *
   * @param payload The country data to send to the server.
   * @returns A promise that resolves to the server's response.
   */
  async create(payload: ICreateCountryPayload) {
    return this.request({
      method: "POST",
      url: "/api/v1/countries",
      data: payload,
    });
  }

  /**
   * Deletes countries by their IDs.
   *
   * @param ids An array of country IDs to delete.
   * @returns A promise that resolves to the server's response.
   */
  async delete(ids: string[]) {
    return this.request({
      method: "DELETE",
      url: "/api/v1/countries",
      data: {
        id: ids,
      },
    });
  }

  /**
   * Retrieves a list of countries.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * @returns A promise that resolves to the server's response containing the list of countries.
   */
  async get(
    query?: IGetCountriesQuery
  ): Promise<AxiosResponse<IPaginatedResponse<ICountry>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/countries?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Retrieves a list of countries for management.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `sortBy`: The field to sort the results by.
   * - `id`: A country ID to retrieve a single country.
   * - `q`: A search query to filter the results by.
   * - `slug`: A slug to filter the results by.
   * - `select`: A comma-separated list of fields to include in the results.
   * - `filters`: An object of filter values to filter the results by.
   * @returns A promise that resolves to the server's response containing the list of countries for management.
   */
  async getManage(
    query?: IGetCountriesQuery
  ): Promise<AxiosResponse<IPaginatedResponse<ICountry>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/countries/manage?${qs.stringify(
        filterNonNull(query || {})
      )}`,
    });
  }
}

export default CountriesService;
