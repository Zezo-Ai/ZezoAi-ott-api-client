import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IAccountDetails,
  IAddAccountDetails,
  IGetAccountDetailsQuery,
  IGetRevenueRequestsQuery,
  IRevenueRequest,
  IRevenueSetting,
  IUpdateAccountDetails,
  IUpdateRevenueRequest,
} from "./partner.types";
import qs from "qs";
import { filterNonNull } from "../../../utils";
import { IPaginatedResponse } from "../../../types";

class PartnerService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Retrieves the revenue settings.
   *
   * @returns A promise that resolves to the server's response containing the revenue settings.
   */
  async getRevenueSettings(): Promise<AxiosResponse<IRevenueSetting>> {
    return this.request({
      method: "GET",
      url: "/api/v1/partner/revenue/settings",
    });
  }

  /**
   * Updates the revenue settings.
   *
   * @param payload The revenue settings data to update on the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated revenue settings.
   */
  async updateRevenueSettings(
    payload: IRevenueSetting
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/partner/revenue/settings",
      data: payload,
    });
  }

  /**
   * Adds account details for a partner.
   *
   * @param payload The account details data to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the added account details.
   */
  async addAccountDetails(
    payload: IAddAccountDetails
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/partner/payment/account/details",
      data: payload,
    });
  }

  /**
   * Updates the account details of a partner.
   *
   * @param payload The updated account details to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated account details.
   */
  async updateAccountDetails(
    payload: IUpdateAccountDetails
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/partner/payment/account/details",
      data: payload,
    });
  }

  /**
   * Retrieves the account details for a partner.
   *
   * @param query Optional query parameters to filter and sort the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `sortBy`: The field to sort the results by.
   * - `id`: A partner ID to retrieve a single partner.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing the list of account details.
   */
  async getAccountDetails(
    query?: IGetAccountDetailsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IAccountDetails>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/partner/payment/account/details?${qs.stringify(
        filterNonNull(query || {})
      )}`,
    });
  }

  /**
   * Creates a revenue request.
   *
   * @param amount The amount of the revenue request to create.
   * @returns A promise that resolves to the server's response containing the ID of the new revenue request.
   */
  async createRevenueRequest(amount: number): Promise<
    AxiosResponse<{
      id: string;
    }>
  > {
    return this.request({
      method: "POST",
      url: "/api/v1/partner/revenue/receipts",
      data: {
        amount,
      },
    });
  }

  /**
   * Updates a revenue request.
   *
   * @param id The ID of the revenue request to update.
   * @param payload The revenue request data to update on the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated revenue request.
   */
  async updateRevenueRequest(
    id: string,
    payload: IUpdateRevenueRequest
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/partner/revenue/receipts/${id}`,
      data: payload,
    });
  }

  /**
   * Retrieves a list of revenue requests.
   *
   * @param query Optional query parameters to filter and sort the revenue requests.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the revenue requests by. The available values are `asc` and `desc`.
   * - `sort_by`: The field to sort the revenue requests by.
   * - `q`: A search query to filter the revenue requests by.
   * - `status`: A status to filter the revenue requests by.
   * - `start_date` and `end_date`: The date range to filter the revenue requests by.
   *   The format of the date is `YYYY-MM-DDTHH:MM:SS.SSSZ`.
   * - `user_id`: A user ID to filter the revenue requests by.
   * @returns A promise that resolves to the server's response containing the list of revenue requests.
   */
  async getRevenueRequests(
    query?: IGetRevenueRequestsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IRevenueRequest>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/partner/revenue/receipts?${qs.stringify(
        filterNonNull(query || {})
      )}`,
    });
  }
}

export default PartnerService;
