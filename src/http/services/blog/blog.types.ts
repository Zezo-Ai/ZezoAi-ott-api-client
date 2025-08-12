import { IPopulateV1 } from "../sections/sections.types";

export interface IBlogQuery {
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

export interface IBlogV1 {
  _id: string;
  title: string;
  slug: string;
  blog_content: string;
  tags: string[];
  thumbnail: string | null;
  category: string;
}

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  blog_content: string;
  tags: string[];
  thumbnail: string | null;
  status: boolean;
  category: string;
  trash: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IBlogs {
  message: string;
  data: IBlog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
    report?: {
      totalPublic: number;
      totalPrivate: number;
    };
  };
}

export interface ICreateBlog {
  title: string;
  slug?: string;
  blog_content: string;
  tags?: string[];
  category?: string;
  status?: boolean;

  thumbnail?: File;
}

export interface IUpdateBlog {
  title?: string;
  slug?: string;
  blog_content?: string;
  tags?: string[];
  category?: string;
  status?: boolean;

  thumbnail?: File;
}

export interface IActionBlog {
  ids: string[];
  action: "public" | "private";
}
