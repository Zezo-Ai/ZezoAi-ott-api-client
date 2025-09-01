export interface IInitUpload {
  Key: string;
  StoreIn?: "ASSETS" | "OTT";
  ACL?: "public-read" | "private";
}

export interface IInitResponse {
  UploadId: string;
  Key: string;
  Bucket: string;
}

export interface IUploadGetUrls {
  file_key: string;
  upload_id: string;
  parts?: number;
  part_number?: number;
  all_parts_uploaded?: boolean;
  bucket?: string;
  StoreIn?: "ASSETS" | "OTT";
}

export interface IUploadGetUrlsResponse {
  signedUrl: string;
  PartNumber: number;
}

export interface IUploadFinalize {
  file_key: string;
  upload_id: string;
  parts: {
    PartNumber: number;
    ETag: string;
  }[];
  type?: "reel";
  payload?: {
    name: string;
  };
  StoreIn?: "ASSETS" | "OTT";
}

export interface IFinalizeResponse {
  id: string;
  type: string;
  url?: string;
}

export interface IUploadResponse {
  key: string;
  finalURL: string;
}
