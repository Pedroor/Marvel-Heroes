export interface ApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ComicsTypes[];
  };
  etag: string;
}

export interface ComicsTypes {
  readonly id: number;
  readonly digitalId: number;
  readonly title: string;
  readonly issueNumber: number;
  readonly variantDescription: string;
  readonly description: string;
  readonly modified: Date;
  readonly isbn: string;
  readonly upc: string;
  readonly diamondCode: string;
  readonly ean: string;
  readonly issn: string;
  readonly format: string;
  readonly pageCount: number;
  readonly thumbnail: Thumbnail;
}

interface Thumbnail {
  readonly path: string;
  readonly extension: string;
}

interface MarvelError {
  readonly code: number;
  readonly status: string;
}

export type ApiError = import("axios").AxiosError<MarvelError>;
