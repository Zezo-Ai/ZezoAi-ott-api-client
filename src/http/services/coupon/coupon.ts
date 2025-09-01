import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICoupon,
  ICouponQuery,
  ICreateCoupon,
  IDeleteCouponAction,
  IUpdateCoupon,
} from "./coupon.types";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class CouponService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new coupon.
   *
   * @param payload The coupon data to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the new coupon.
   */
  async create(payload: ICreateCoupon): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/coupons",
      data: payload,
    });
  }

  /**
   * Updates an existing coupon.
   *
   * @param id The ID of the coupon to update.
   * @param payload The coupon data to update on the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated coupon.
   */
  async update(
    id: string,
    payload: IUpdateCoupon
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/coupons/${id}`,
      data: payload,
    });
  }

  /**
   * Deletes coupons by their IDs.
   *
   * @param id An array of coupon IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted coupons.
   */
  async delete(id: string[]): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/coupons",
      data: { id },
    });
  }

  /**
   * Performs an action on multiple coupons.
   *
   * @param payload The payload containing the action to perform and the IDs of the coupons.
   * The available actions are "delete".
   * @returns A promise that resolves to the server's response containing the count of updated coupons.
   */
  async action(
    payload: IDeleteCouponAction
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/coupons/action",
      data: payload,
    });
  }

  /**
   * Retrieves a list of coupons for management.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * @returns A promise that resolves to the server's response containing the paginated list of coupons.
   */
  async getManage(
    query?: ICouponQuery
  ): Promise<AxiosResponse<IPaginatedResponse<ICoupon>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/coupons/manage?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }
}

export default CouponService;
