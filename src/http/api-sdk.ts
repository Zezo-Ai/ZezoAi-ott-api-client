import AnalyticsService from "./services/analytics/analytics";
import AuthMethodsService from "./services/auth.methods/auth.methods";
import AuthService from "./services/auth/auth";
import BlogService from "./services/blog/blog";
import CategoriesService from "./services/categories/categories";
import ContentService from "./services/content/content";
import FavoriteService from "./services/favorite/favorite";
import PaymentService from "./services/payments/payments";
import SectionsService from "./services/sections/sections";
import SettingsService from "./services/settings/settings";
import SubscriptionService from "./services/subscription/subscription";
import CountriesService from "./services/countries/countries";
import UserService from "./services/user/user";
import { AxiosRequestConfig } from "axios";
import ConfigService from "./services/config/config";
import UpgradeService from "./services/upgrade/upgrade";
import ReleasePopupService from "./services/release.popup/release.popup";
import ApiKeyService from "./services/api.key/api.key";
import FileManagerService from "./services/file.manager/file.manager";
import HistoryService from "./services/history/history";
import ReelsService from "./services/reels/reels";
import UploadService from "./services/upload/upload";
import GenresService from "./services/genres/genres";
import LanguageService from "./services/language/language";
import CastService from "./services/cast/cast";
import TranscodingService from "./services/transcoding/transcoding";
import NotificationsService from "./services/notifications/notifications";
import AppSettingsService from "./services/app.settings/app.settings";
import CouponService from "./services/coupon/coupon";
import AdsService from "./services/ads/ads";
import PartnerService from "./services/partner/partner";

export interface IOptions {
  baseUrl: string;
  withCredentials?: boolean;
  headers?: Record<string, string>;
  interceptors?: {
    request?: (
      config: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    response?: (response: any) => any;
    responseError?: (error: any) => any;
  };
}

export class ZezoOTT {
  analytics: AnalyticsService;
  auth: AuthService;
  authMethods: AuthMethodsService;
  blogs: BlogService;
  categories: CategoriesService;
  contents: ContentService;
  favorites: FavoriteService;
  payments: PaymentService;
  settings: SettingsService;
  subscriptions: SubscriptionService;
  sections: SectionsService;
  countries: CountriesService;
  users: UserService;
  config: ConfigService;
  upgrade: UpgradeService;
  releasePopup: ReleasePopupService;
  apiKeys: ApiKeyService;
  fileManager: FileManagerService;
  history: HistoryService;
  reels: ReelsService;
  upload: UploadService;
  genres: GenresService;
  language: LanguageService;
  cast: CastService;
  transcoding: TranscodingService;
  notifications: NotificationsService;
  appSettings: AppSettingsService;
  coupons: CouponService;
  ads: AdsService;
  partner: PartnerService;

  /**
   * Constructor for ZezoOTT class.
   * @param {IOptions} options an object containing the base URL and optionally
   * a flag to indicate whether to send credentials with requests.
   */
  constructor(options: IOptions) {
    this.analytics = new AnalyticsService(options);
    this.auth = new AuthService(options);
    this.authMethods = new AuthMethodsService(options);
    this.blogs = new BlogService(options);
    this.categories = new CategoriesService(options);
    this.contents = new ContentService(options);
    this.favorites = new FavoriteService(options);
    this.payments = new PaymentService(options);
    this.settings = new SettingsService(options);
    this.subscriptions = new SubscriptionService(options);
    this.sections = new SectionsService(options);
    this.countries = new CountriesService(options);
    this.users = new UserService(options);
    this.config = new ConfigService(options);
    this.upgrade = new UpgradeService(options);
    this.releasePopup = new ReleasePopupService(options);
    this.apiKeys = new ApiKeyService(options);
    this.fileManager = new FileManagerService(options);
    this.history = new HistoryService(options);
    this.reels = new ReelsService(options);
    this.upload = new UploadService(options);
    this.genres = new GenresService(options);
    this.language = new LanguageService(options);
    this.cast = new CastService(options);
    this.transcoding = new TranscodingService(options);
    this.notifications = new NotificationsService(options);
    this.appSettings = new AppSettingsService(options);
    this.coupons = new CouponService(options);
    this.ads = new AdsService(options);
    this.partner = new PartnerService(options);
  }
}
