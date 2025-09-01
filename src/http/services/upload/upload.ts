import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IFinalizeResponse,
  IInitResponse,
  IInitUpload,
  IUploadFinalize,
  IUploadGetUrls,
  IUploadGetUrlsResponse,
  IUploadResponse,
} from "./upload.types";
class UploadService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Initializes a new upload.
   *
   * @param payload The data to send to the server to initialize the upload.
   * The payload should contain the `key` of the file to upload.
   * @returns A promise that resolves to the server's response containing the upload details.
   */
  async init(payload: IInitUpload): Promise<AxiosResponse<IInitResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/upload/init",
      data: payload,
    });
  }

  /**
   * Retrieves a list of pre-signed URLs for uploading a file in multiple parts.
   *
   * @param payload The data to send to the server to retrieve the pre-signed URLs.
   * The payload should contain the `key`, `upload_id`, `parts`, and `part_number` of the file.
   * @returns A promise that resolves to the server's response containing the list of pre-signed URLs.
   */
  async getUrls(
    payload: IUploadGetUrls
  ): Promise<AxiosResponse<IUploadGetUrlsResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/upload/get_presigned_urls",
      data: payload,
    });
  }

  /**
   * Finalizes the upload process for a file.
   *
   * @param payload The data required to finalize the upload.
   * The payload should include the `file_key`, `upload_id`, `parts`, and `part_number`.
   * @returns A promise that resolves to the server's response containing the finalization details.
   */
  async finalize(
    payload: IUploadFinalize
  ): Promise<AxiosResponse<IFinalizeResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/upload/finalize",
      data: payload,
    });
  }

  /**
   * Uploads a file directly to the server.
   *
   * @param payload A FormData object containing the file to upload. field name should be `file`.
   * Pass folder name as `folder` field if uploading to a specific folder.
   * @returns A promise that resolves to the server's response containing the upload details.
   */
  async uploadFile(payload: FormData): Promise<AxiosResponse<IUploadResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/upload",
      data: payload,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default UploadService;
