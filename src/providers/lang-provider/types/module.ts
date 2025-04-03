export enum Locales {
  EN = "en",
  PL = "pl",
}

export type JsonMessages = {
  [key: string]: string;
};

export type Module = {
  default: JsonMessages;
};
