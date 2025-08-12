declare interface IWebSettingsMenu {
  name: string;
  link: string;
  type: "custom" | "category";
  icon?: string;
  id: string;
}
export interface IWebSettingsMenus {
  menu: IWebSettingsMenu[];
}

export interface IWebSettings {
  header: IWebSettingsMenus;
  footer: IWebSettingsMenus;
}

export interface IWebSetting {
  _id: string;
  name: string;
  admin_title: string;
  web_title: string;
  description: string;
  logo: string;
  favicon: string;
  siteUrl: string;
  seo_title: string;
  meta_description: string;
  meta_keywords: string[];
  google_teg_manager: string;
  social_links: any[];
  copy_right_text: string;
  new_release_poster: string;
  webSettings: IWebSettings;
}

export interface IWebsiteSetting {
  message: string;
  data: IWebSetting;
}

export interface IGetManageSettingsQuery {
  select?: string;
}

export interface IUpdateSettings {
  id: string;
  name?: string;
  description?: string;
  siteUrl?: string;
  seo_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  google_teg_manager?: string;
  copy_right_text?: string;
  webSettings?: IWebSettings;

  logo?: File; // File
  favicon?: File; // File
  new_release_poster?: File; // File
}

export interface IUpdateSocialMedia {
  settings_id: string;
  action: "create" | "update" | "delete";
  id?: string;
  name?: string;
  link?: string;

  icon?: string; // File
}
