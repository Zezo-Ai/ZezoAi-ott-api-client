import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import {
  IActionOnCampaign,
  IAdCampaign,
  IAutoGenerate,
  ICreateAdCampaign,
  IGenerateAdQuery,
  IGetAdsQuery,
  IGetCampaignsQuery,
  IServeAd,
  IUpdateAdCampaign,
} from "./ads.types";
import { IPaginatedResponse } from "../../../types";
import { filterNonNull } from "../../../utils";

class AdsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new ad campaign.
   *
   * @param payload The ad campaign data to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the new ad campaign.
   */
  async createCampaign(
    payload: ICreateAdCampaign
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/ad/campaign",
      data: payload,
    });
  }

  /**
   * Updates an existing ad campaign.
   *
   * @param id The ID of the ad campaign to update.
   * @param payload The ad campaign data to update on the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated ad campaign.
   */
  async updateCampaign(
    id: string,
    payload: IUpdateAdCampaign
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/ad/campaign/${id}`,
      data: payload,
    });
  }

  /**
   * Deletes ad campaigns by their IDs.
   *
   * @param id An array of ad campaign IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted ad campaigns.
   */
  async deleteCampaign(
    id: string[]
  ): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/ad/campaign",
      data: { id },
    });
  }

  /**
   * Performs an action on multiple ad campaigns.
   *
   * @param payload The ad campaign action payload.
   * @returns A promise that resolves to the server's response containing the count of updated ad campaigns.
   */
  async actionsOnCampaign(
    payload: IActionOnCampaign
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/ad/campaign/action",
      data: payload,
    });
  }

  /**
   * Retrieves a list of ad campaigns.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `sortBy`: The field to sort the results by.
   * - `id`: A campaign ID to retrieve a single campaign.
   * - `q`: A search query to filter the results by.
   * - `status`: A status to filter the results by.
   * - `select`: A comma-separated list of fields to include in the results.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing a paginated list of ad campaigns.
   */
  async getListCampaigns(
    query?: IGetCampaignsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IAdCampaign>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/ad/campaign?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Retrieves a list of ads.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `type`: The type of ads to retrieve. The available values are `display` and `video`.
   * - `duration`: The duration of the ads to retrieve.
   * - `limit`: The maximum number of ads to retrieve.
   * @returns A promise that resolves to the server's response containing a list of ads.
   */
  async getAds(query?: IGetAdsQuery): Promise<AxiosResponse<IServeAd[]>> {
    return this.request({
      method: "GET",
      url: `/api/v1/ad?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Generates an ad based on the given query parameters.
   *
   * @returns A promise that resolves to the server's response containing the generated ad.
   */
  async generateAd(
    query?: IGenerateAdQuery
  ): Promise<AxiosResponse<IAutoGenerate>> {
    return this.request({
      method: "GET",
      url: `/api/v1/ad/generate?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }
}

export default AdsService;
