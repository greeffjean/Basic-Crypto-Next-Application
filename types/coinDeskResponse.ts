export type coinDeskResponse = {
  bpi: {
    [key: string]: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
  chartName: string;
  disclaimer: string;
  time: { [key: string]: string | { [key: string]: string } };
};
