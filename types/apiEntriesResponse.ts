export type entriesType = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

export type apiEntriesResponse = {
  count: number;
  entries: entriesType[];
};
