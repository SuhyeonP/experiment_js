import { Block } from 'components/atom/block/Block';
import { useState } from 'react';
import { formatCardNumber } from '../../../util/creditCards';

export const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handleChangeCardNumbers = (e: any) => {
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
