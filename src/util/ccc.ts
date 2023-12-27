interface ICardType {
  split: number[];
  format: RegExp;
  maxLength: number;
}

export const CardType: Record<string, ICardType> = {
  amex: {
    split: [4, 6, 5],
    format: /^3[47]\d{0,13}/,
    maxLength: 15,
  },
  general: {
    split: [4, 4, 4, 4],
    format: /^\d{0,15}/,
    maxLength: 16,
  },
};
// export const getStrictBlocks = (block: number[]) => {
//   const total = block.reduce((prev, current) => {
//     return prev + current;
//   }, 0);
//
//   // 19 뭔데
//   return block.concat(19 - total);
// };

export const getCardType = (value: string) => {
  Object.keys(CardType).forEach((key: string) => {
    if (CardType[key].format.test(value)) {
      const blocks = CardType[key].split;
      return {
        type: key,
        blocks: blocks,
      };
    }
  });

  return {
    type: 'unknown',
    blocks: CardType.general.split,
  };
};
