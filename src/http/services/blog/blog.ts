import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IActionBlog,
  IBlog,
  IBlogQuery,
  IBlogs,
  IBlogV1,
  ICreateBlog,
  IUpdateBlog,
} from "./blog.types";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class BlogService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new blog.
   *
   * @param payload The blog data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the new blog.
   */
  async create(
    payload: ICreateBlog,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/blog",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates an existing blog.
   *
   * @param id The ID of the blog to update.
   * @param payload The blog data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the updated blog.
   */
  async update(
    id: string,
    payload: IUpdateBlog,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/blog/${id}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Performs an action on multiple blogs.
   *
   * @param payload The payload containing the action to perform and the IDs of the blogs.
   * The available actions are "public", "private".
   * @returns A promise that resolves to the server's response containing the count of updated blogs.
   */
  async actions(
    payload: IActionBlog
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/blog/action",
      data: payload,
    });
  }

  /**
   * Deletes one or more blogs by their IDs.
   *
   * @param ids An array of blog IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted blogs.
   */
  async delete(
    ids: string[]
  ): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/blog",
      data: { ids },
    });
  }

  /**
   * Retrieves a list of blogs.
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
   * @returns A promise that resolves to the server's response containing the list of blogs.
   */
  async getList(
    query?: IBlogQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IBlogV1>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/blog?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Retrieves a list of blogs for management.
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
   * @returns A promise that resolves to the server's response containing the list of blogs for management.
   */

  async getManage(
    query?: IBlogQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IBlog>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/blog/manage?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Retrieves a blog by slug.
   *
   * @param payload the query with the slug of the blog to retrieve
   * @returns response from the server
   * @deprecated use the `getList` method instead
   */
  async get(payload: IBlogQuery): Promise<AxiosResponse<IBlogs>> {
    return this.request({
      method: "GET",
      url: `/api/blog/blogs?slug=${payload.slug}`,
    });
  }
}

export default BlogService;
