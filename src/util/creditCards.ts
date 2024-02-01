export enum NumberFormattingType {
  CARD = 'CARD',
  YYYYMMDD = 'YYYYMMDD',
  YYMM = 'YYMM',
  PHONE = 'PHONE',
}
export interface INumberFormatting {
  separation?: string;
  type?: NumberFormattingType;
}

export const DEFAULT_CARD_FORMAT = /(\d{1,4})/g;

export interface ICard {
  type: string;
  format: RegExp;
  startPattern: RegExp;
  maxCardLength: number;
}
export const CARD_TYPES: ICard[] = [
  {
    type: 'amex',
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    startPattern: /^3[47]/,
    maxCardLength: 15,
  },
  {
    type: 'all_credits',
    format: DEFAULT_CARD_FORMAT,
    startPattern: /^\d/,
    maxCardLength: 16,
  },
];

export const getCardTypeByValue = (value: string) =>
  CARD_TYPES.filter(cardType => cardType.startPattern.test(value))[0];

export const reachedMaxLength = (value: string, valueLength: number) => {
  const cardType = getCardTypeByValue(value);
  return cardType && valueLength >= cardType.maxCardLength;
};
export const formatCardNumber = (value: string) => {
  const cardType = getCardTypeByValue(value);
  if (!cardType) return (value.match(/\d+/g) || []).join('');
  const { format } = cardType;
  if (format.global) {
    return value.match(format)?.join('-');
  }
  const execResult = format.exec(value.split('-').join(''));
  if (execResult) {
    return execResult
      .splice(1, 3)
      .filter(x => x)
      .join('-');
  }
  return value;
};

export const checkIsNumeric = (value: string) => {
  return /^\d+$/.test(value);
};
