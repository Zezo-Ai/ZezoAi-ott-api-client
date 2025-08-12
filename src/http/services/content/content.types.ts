import { IPopulate } from "../../../types";
import { IPopulateV1 } from "../sections/sections.types";

export interface IContentlanguage {
  _id: string;
  name: string;
}

export interface IContentCast {
  _id: string;
  name: string;
  type: "actor" | "director" | "writer" | "producer";
  avatar: string | null;
  castType: string;
}

export interface ISubtitles {
  title?: string | undefined;
  language?: string | undefined;
  type: "application/x-subrip" | "application/ttml+xml" | "text/vtt";
  url: string;
}

export interface IContent {
  id: string;
  title: string;
  posterUrl: string;
  type: "movie" | "series" | "music";
}

export interface IContentEpisodes {
  _id: string;
  name: string;
  description: string;
  data: string;
  duration: number;
  number: number;
  source_link: string;
  trailer_source_link: string;
  source_type: "HLS" | "MP4";
  content_offering_type: "FREE" | "PREMIUM";
  subtitles: ISubtitles[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  status: boolean;
  skipIntroTimestamp?: {
    start: number;
    end: number;
  } | null;
  nextEpisodeTimestamp?: number | null;
  source_key_type?: "USE_PREFIX" | "USE_CUSTOM" | "NONE";
  views?: number;
  watch_time?: number;
}

export interface IContentSeasons {
  _id: string;
  name: string;
  content_id: string;
  order: number;
  season_number: number;
  episodes: IContentEpisodes[] | null;
  status: boolean;
  created_by: string;
  createdAt: string;
  updatedAt: string;
  images?: IContentImages[] | null;
  title_image?: string | null;
  description?: string | null;
}

export interface IContentCategory {
  _id: string;
  name: string;
}

export interface IContentGenres {
  _id: string;
  name: string;
}

export interface IContentPagination {
  length: number;
  limit: number;
  page: number;
  total: number;
  hasNextPage: boolean;
  nextPage: number | null;
}

export interface IContentMeta {
  pagination: IContentPagination;
  report: any | null;
}

export interface IContentImages {
  id: string;
  image_id: string;
  name: string;
  width: number;
  height: number;
  sizes?: {
    small: string;
    medium: string;
    large: string;
    original: string;
  };
}

export interface IContentData {
  _id: string;
  name: string;
  slug: string;
  u_age: string;
  description: string;
  duration: string;
  rating: number;
  source_link: string | null;
  source_type: "HLS" | "MP4" | "LIVE_STREAM_HLS";
  trailer_source_link: string | null;
  trailer_source_type: "HLS" | "MP4";
  language: IContentlanguage | null;
  cast: IContentCast[] | null;
  poster: string;
  thumbnail: string;
  views: number;
  tags: string[];
  job_id: string | null;
  seasons: IContentSeasons[] | null;
  status: "PUBLIC" | "PRIVATE" | "PENDING" | "REJECTED";
  trash: boolean;
  type: "series" | "movie" | "live_stream";
  content_offering_type: "FREE" | "PREMIUM" | "BUY_OR_RENT";
  updated_by: string;
  created_by: string;
  createdAt: string;
  updatedAt: string;
  category: IContentCategory | null;
  genres: IContentGenres[] | null;
  subtitles: ISubtitles[];
  is_buy_or_rent?: "BUY" | "RENT";
  rent_duration?: number | null;
  price?: number | null;
  buy_or_rent_status: {
    _id?: string;
    status?: "valid" | "expired";
  }[];
  title_image?: string | null;
  content_duration?: string | null;
  release_year?: string | null;
  images?: IContentImages[] | null;
  watch_time?: number | null;
  revenue?: number | null;
  source_key_type?: "USE_PREFIX" | "USE_CUSTOM";
  trailer_source_key_type?: "USE_PREFIX" | "USE_CUSTOM";
  forKids: boolean;
  forFamily: boolean;
  buy_count?: number;
  rent_count?: number;
  buy_revenue?: number;
  rent_revenue?: number;
}

export interface IContent {
  data: IContentData[];
  meta: IContentMeta;
}

export interface IRentOrBuyContentData {
  _id: string;
  content_id: IContentData;
  user_id: string;
  status: "valid" | "expired";
  valid_upto: string;
  createdAt: string;
  updatedAt: string;
}
// rent or buy content
export interface IRentOrBuyContent {
  data: IRentOrBuyContentData[];
  meta: IContentMeta;
}

// get rent or buy by content id or user id
export interface IGetIsRentOrBuyContentByIDData {
  _id: string;
  content_id: {
    _id: string;
    name: string;
    is_buy_or_rent?: "BUY" | "RENT";
    rent_duration: number;
    price: number;
  };
  user_id: string;
  status: "valid" | "expired";
  valid_upto: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITvod {
  data: IContent["data"];
  meta: {
    pagination: {
      page: number;
      limit: number;
      pages: number;
      total: number;
      hasNextPage: boolean;
      nextPage: null | number;
    };
  };
}

export interface IUpdateContentGeoPayload {
  content_id: string;
  countries: string[];
}

export interface IGetManageContentQueryPayload {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  fields?: string[];
  q?: string;
  filters?: object;
  populate?: IPopulate[];
  id?: string;
  sortby?: string;
}

export interface ICreateContentPayload {
  name: string;
  slug: string;
  type: "movie" | "series" | "live_stream";
  description?: string;
  u_age?: string;
  duration?: string;
  rating?: string;
  source_link?: string;
  source_type?: "HLS" | "MP4" | "LIVE_STREAM_HLS";
  trailer_source_link?: string;
  trailer_source_type?: "HLS" | "MP4";
  category?: string;
  genres?: string[];
  language?: string;
  cast?: string[];
  tags?: string[];
  content_offering_type?: "FREE" | "PREMIUM" | "BUY_OR_RENT";
  is_buy_or_rent?: "BUY" | "RENT";
  rent_duration?: number;
  price?: number;
  content_duration?: string;
  is_18_plus?: boolean;
  message_for_18_plus?: string;
  release_year?: string;
  forKids?: boolean;
  forFamily?: boolean;
}

export interface ICreateContentResponse {
  id: string;
}

export interface IContentActionsPayload {
  id: Array<string>;
  action: "public" | "private" | "trash" | "restore" | "delete";
}

export interface IContentActionsResponse {
  acknowledged: boolean;
  modifiedCount: number;
  matchedCount: number;
}

export interface IUpdateContentPayload {
  name: string;
  slug: string;
  type: "movie" | "series" | "live_stream";
  description?: string;
  u_age?: string;
  duration?: string;
  rating?: string;
  source_link?: string;
  source_type?: "HLS" | "MP4" | "LIVE_STREAM_HLS";
  trailer_source_link?: string;
  trailer_source_type?: "HLS" | "MP4";
  category?: string;
  genres?: string[];
  language?: string;
  cast?: string[];
  tags?: string[];
  content_offering_type?: "FREE" | "PREMIUM" | "BUY_OR_RENT";
  is_buy_or_rent?: "BUY" | "RENT";
  rent_duration?: number;
  price?: number;
  content_duration?: string;
  is_18_plus?: boolean;
  message_for_18_plus?: string;
  release_year?: string;
  forKids?: boolean;
  forFamily?: boolean;
}

export interface IUpdateContentResponse {
  id: string;
}

export interface IGetSeasonManageQueryPayload {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  select?: string;
  q?: string;
  filters?: object;
  populate?: IPopulate[];
  seasonId?: string;
  sortby?: string;
  contentId?: string;
  slug?: string;
}

export interface ICreateContentSeasonPayload {
  content_id: string;
  name: string;
  season_number?: number;
  status?: boolean;
}

export interface ICreateContentSeasonResponse {
  id: string;
}

export interface IUpdateContentSeasonPayload {
  season_id: string;
  name?: string;
  season_number?: number;
  status?: boolean;
}

export interface ICreateContentEpisodePayload {
  name: string;
  description: string;
  number?: number;
  duration: number;
  source_link: string;
  source_type: "HLS" | "MP4";
  source_key_type?: "USE_PREFIX" | "USE_CUSTOM";
  content_offering_type?: "FREE" | "PREMIUM";
  status: boolean;
  skipIntroTimestamp?: {
    start: number;
    end: number;
  };
  nextEpisodeTimestamp?: number | null;
  season_id: string;
  thumbnail: File;
}

export interface IUpdateContentEpisodePayload {
  name: string;
  description: string;
  number?: number;
  duration: number;
  source_link: string;
  source_type: "HLS" | "MP4";
  source_key_type?: "USE_PREFIX" | "USE_CUSTOM";
  content_offering_type?: "FREE" | "PREMIUM";
  status: boolean;
  skipIntroTimestamp?: {
    start: number;
    end: number;
  };
  nextEpisodeTimestamp?: number | null;
  episode_id: string;
  thumbnail: string;
}

export interface IUpdateContentSubtitlesPayload {
  id: string;
  action: "add" | "remove";
  type: "content" | "episode";
  title?: string;
  language: string;
  subtitle?: File;
}

export interface IUploadContentImage {
  content_id: string;
  image_id: string;
  update_image_id?: string;
  type: "create" | "update";
  file: File;
}

export interface IDeleteContentImage {
  content_id: string;
  image_id: string;
}

export interface ICreateImageSize {
  name: string;
  width: number;
  height: number;
}

export interface IImageSize {
  _id: string;
  name: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGetContentQuery {
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
