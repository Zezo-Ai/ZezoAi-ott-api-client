import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IContent,
  IContentActionsPayload,
  IContentActionsResponse,
  IContentData,
  IContentSeasons,
  ICreateContentEpisodePayload,
  ICreateContentPayload,
  ICreateContentResponse,
  ICreateContentSeasonPayload,
  ICreateContentSeasonResponse,
  ICreateImageSize,
  IDeleteContentImage,
  IGetContentQuery,
  IGetManageContentQueryPayload,
  IGetSeasonManageQueryPayload,
  IImageSize,
  ITvod,
  IUpdateContentEpisodePayload,
  IUpdateContentGeoPayload,
  IUpdateContentPayload,
  IUpdateContentResponse,
  IUpdateContentSeasonPayload,
  IUpdateContentSubtitlesPayload,
  IUploadContentImage,
} from "./content.types";
import qs from "qs";
import { IPaginatedResponse } from "../../../types";
import { filterNonNull } from "../../../utils";

class ContentService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Retrieves a list of contents.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing the list of contents.
   */
  async getList(
    query?: IGetContentQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IContentData>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/content?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Fetches the list of content.
   *
   * @param query the search query
   * @returns response from the server
   */
  async get(query?: string): Promise<AxiosResponse<IContent>> {
    return this.request({
      method: "GET",
      url: `/service/content${query || ""}`,
    });
  }

  /**
   * Fetches the list of content seasons.
   *
   * @param query the search query
   * @returns response from the server containing the list of content seasons
   */
  async getSeasons(query?: string): Promise<AxiosResponse<IContentSeasons[]>> {
    return this.request({
      method: "GET",
      url: `/service/content/seasons${query || ""}`,
    });
  }

  /**
   * Checks if a content has been bought or rented by the current user.
   * @param contentId the id of the content to check
   * @returns a boolean indicating if the content has been bought or rented
   */
  async getIsContentBuyedOrRented(
    contentId: string,
    headers?: Record<string, string>
  ): Promise<boolean> {
    const response = await this.request({
      method: "GET",
      url: `/api/content/buy-or-rent/${contentId}`,
      headers,
    });

    if (response?.data?.status === "valid") {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Fetches the list of content available for rent or buy.
   *
   * @param queryString the query string
   * @returns a promise that resolves to the server's response containing the list of content available for rent or buy
   */
  async getTvod(queryString?: string): Promise<AxiosResponse<ITvod>> {
    return this.request({
      method: "GET",
      url: `/service/content/tvod${queryString || ""}`,
    });
  }

  /**
   * Updates the geo location for a content.
   *
   * @param payload the update geo location payload
   * @returns a promise that resolves to the server's response
   */
  async updateGeoLocation(payload: IUpdateContentGeoPayload) {
    return this.request({
      method: "PATCH",
      url: "/api/v1/content/geo",
      data: payload,
    });
  }

  /**
   * Fetches the list of content for management.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * - `id`: A content ID to retrieve a single content.
   * @returns A promise that resolves to the server's response containing the list of content for management.
   */
  async getManage<T = IContentData>(
    query?: IGetManageContentQueryPayload
  ): Promise<AxiosResponse<IPaginatedResponse<T>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/content/manage?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: `/api/v1/content/manage`,
    });
  }

  /**
   * Creates a new content.
   *
   * @param payload The content data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the newly created content.
   */
  async create(
    payload: ICreateContentPayload,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<ICreateContentResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/content",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Perform an action on a content.
   *
   * @param payload The content action payload.
   * @returns A promise that resolves to the server's response containing the result of the action.
   */
  async actions(
    payload: IContentActionsPayload
  ): Promise<AxiosResponse<IContentActionsResponse>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/content/action",
      data: payload,
    });
  }

  /**
   * Updates a content.
   *
   * @param contentID The ID of the content to update.
   * @param payload The content data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the updated content.
   */
  async update(
    contentID: string,
    payload: IUpdateContentPayload,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<IUpdateContentResponse>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/content/${contentID}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Removes the title image for a content.
   *
   * @param contentID The ID of the content to remove the title image for.
   * @returns A promise that resolves to the server's response.
   */
  async removeTitleImage(contentID: string): Promise<AxiosResponse<any>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/content/images/title/${contentID}`,
    });
  }

  /**
   * Retrieves a list of seasons for a content for management.
   *
   * @param query The query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * - `id`: A content ID to retrieve a single content.
   * @returns A promise that resolves to the server's response containing the list of seasons for the content.
   */
  async getSeasonManage<T = IContentSeasons>(
    query: IGetSeasonManageQueryPayload
  ): Promise<AxiosResponse<IPaginatedResponse<T>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/content/seasons/manage?${qs.stringify(
        filterNonNull(query)
      )}`,
    });
  }

  /**
   * Creates a new season for a content.
   *
   * @param payload The data to send to the server to create the season.
   * @returns A promise that resolves to the server's response containing the ID of the new season.
   */
  async createSeason(
    payload: ICreateContentSeasonPayload
  ): Promise<AxiosResponse<ICreateContentSeasonResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/content/seasons",
      data: payload,
    });
  }

  /**
   * Deletes a season by ID.
   *
   * @param season_id The ID of the season to delete.
   * @returns A promise that resolves to the server's response containing the ID of the deleted season.
   */
  async deleteSeason(
    season_id: string
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/content/seasons/${season_id}`,
    });
  }

  /**
   * Updates a season by ID.
   *
   * @param payload The data to send to the server to update the season.
   * @returns A promise that resolves to the server's response containing the ID of the updated season.
   */
  async updateSeason(
    payload: IUpdateContentSeasonPayload
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/content/seasons",
      data: payload,
    });
  }

  /**
   * Creates a new episode for a season.
   *
   * @param payload The episode data to send to the server to create the episode.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the new episode.
   */
  async createEpisode(
    payload: ICreateContentEpisodePayload,
    headers?: AxiosHeaders
  ): Promise<
    AxiosResponse<{
      id: string;
    }>
  > {
    return this.request({
      method: "POST",
      url: "/api/v1/content/seasons/episodes",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Deletes an episode by ID.
   *
   * @param episode_id The ID of the episode to delete.
   * @returns A promise that resolves to the server's response containing the ID of the deleted episode.
   */
  async deleteEpisode(
    episode_id: string
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/content/seasons/episodes/${episode_id}`,
    });
  }

  /**
   * Updates an episode by ID.
   *
   * @param payload The data to send to the server to update the episode.
   * @returns A promise that resolves to the server's response containing the ID of the updated episode.
   */
  async updateEpisode(
    payload: IUpdateContentEpisodePayload,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/content/seasons/episodes",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates subtitles for a given content or episode.
   *
   * @param payload The data to send to the server to update the subtitles.
   * @param headers Optional headers to send with the request.
   * @returns A promise that resolves to the server's response.
   */
  async manageSubtitles(
    payload: IUpdateContentSubtitlesPayload,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/content/subtitles",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Uploads images for a given content.
   *
   * @param payload The data to send to the server for uploading images.
   * @param headers Optional headers to send with the request.
   * @returns A promise that resolves to the server's response containing the ID of the uploaded image.
   */

  async uploadImages(
    payload: IUploadContentImage,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/content/images/upload",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Fetches search results based on the given query string.
   *
   * @param query The search query to be used for finding matching content.
   * @returns A promise that resolves to an array of matching content items.
   */
  async fetchSearchResults(query: string): Promise<AxiosResponse<IContent[]>> {
    return this.request({
      method: "GET",
      url: "/api/search",
      params: { query },
    });
  }

  /**
   * Deletes an image for a given content.
   *
   * @param payload The data to send to the server for deleting an image.
   * @returns A promise that resolves to the server's response containing the ID of the deleted image.
   */
  async deleteImage(
    payload: IDeleteContentImage
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/content/images/delete",
      data: payload,
    });
  }

  /**
   * Creates a new image size.
   *
   * @param payload The image size data to send to the server. The payload should include the `name`, `width`, and `height` of the image size.
   * @returns A promise that resolves to the server's response containing a message indicating the result of the operation.
   */
  async createImageSize(
    payload: ICreateImageSize
  ): Promise<AxiosResponse<{ message: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/content/images/field/create",
      data: payload,
    });
  }

  /**
   * Retrieves a list of all image sizes.
   *
   * @returns A promise that resolves to the server's response containing a list of image sizes.
   */
  async listImageSizes(): Promise<AxiosResponse<IImageSize[]>> {
    return this.request({
      method: "GET",
      url: "/api/v1/content/images/fields",
    });
  }

  /**
   * Deletes an image size by its ID.
   *
   * @param id The ID of the image size to delete.
   * @returns A promise that resolves to the server's response containing a message indicating the result of the operation.
   */
  async deleteImageSize(
    id: string
  ): Promise<AxiosResponse<{ message: string }>> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/content/images/fields/${id}`,
    });
  }
}

export default ContentService;
