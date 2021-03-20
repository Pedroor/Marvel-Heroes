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
    results: HeroTypes[];
  };
  etag: string;
}

export interface HeroTypes {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly modified: Date;
  readonly resourceURI: string;
  readonly url: Url;
  readonly thumbnail: Thumbnail;
  readonly comics: Comics;
  readonly stories: Stories;
  readonly events: Events;
  readonly series: Series;
}

interface Url {
  readonly type: string;
  readonly url: string;
}

interface Thumbnail {
  readonly path: string;
  readonly extension: string;
}

interface Comics {
  readonly avaible: number;
  readonly returned: number;
  readonly collectionURI: string;
  readonly items: [
    {
      readonly resourceURI: string;
      readonly name: string;
    }
  ];
}

interface Stories {
  readonly available: number;
  readonly returned: number;
  readonly collectionURI: string;
  readonly items: [
    {
      readonly resourceURI: string;
      readonly name: string;
      readonly type: string;
    }
  ];
}

interface Events {
  readonly available: number;
  readonly returned: number;
  readonly collectionURI: string;
  readonly items: [
    {
      readonly resourceURI: string;
      readonly name: string;
    }
  ];
}

interface Series {
  readonly available: number;
  readonly returned: number;
  readonly collectionURI: string;
  readonly items: [
    {
      resourceURI: string;
      name: string;
    }
  ];
}

interface MarvelError {
  readonly code: number;
  readonly status: string;
}

export type ApiError = import("axios").AxiosError<MarvelError>;
