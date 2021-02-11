export type CommonListContents<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type CommonContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// https://document.microcms.io/content-api/get-list-contents
export type GetListContentsQuery = {
  draftKey?: string;
  limit?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
  depth?: number;
};

// https://document.microcms.io/content-api/get-content
export type GetContentQuery = {
  draftKey?: string;
  fields?: string;
  depth?: number;
};
