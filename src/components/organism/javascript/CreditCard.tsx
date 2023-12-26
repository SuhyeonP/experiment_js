import { Block } from 'components/atom/block/Block';
import { useState } from 'react';
import { checkIsNumeric, formatCardNumber, reachedMaxLength } from '../../../util/creditCards';

export const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handleChangeCardNumbers = (e: any) => {
    const val = e.target.value;
    if (val) {
      const valueLength = val.split('-').join('').length;
      if (reachedMaxLength(val, valueLength)) {
        e.preventDefault();
      }
    }
    setCardNumber(e.target.value);
  };

  return (
    <Block>
      <div className={''}>
        <input value={formatCardNumber(cardNumber)} onChange={handleChangeCardNumbers} />
      </div>
    </Block>
  );
};
