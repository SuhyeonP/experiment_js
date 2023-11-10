import { PortalStyled } from './react.styled';
import { Text } from 'components/atom/text/Text';
import { useState } from 'react';
import { GlobalPortal } from '../../../GlobalPortal';
import { ExperimentLayout } from 'components/molecules/layout/layout.styled';

export const ChlidrenElement = () => {
  return (
    <div
      className={'childrenPortal'}
      onClick={() => {
        console.log('children element');
      }}
    >
      <Text>I am Children of Portal</Text>
    </div>
  );
};

export const Portal = (): JSX.Element => {
  const [use, setUse] = useState(false);
  const handleClickUsingPortal = () => {
    setUse(prev => !prev);
  };

  return (
    <PortalStyled>
      <ExperimentLayout>
        <div className={'experiments'}>
          <button onClick={handleClickUsingPortal}>using Portal</button>
          {use ? (
            <GlobalPortal.Consumer>
              <ChlidrenElement />
            </GlobalPortal.Consumer>
          ) : (
            <ChlidrenElement />
          )}
        </div>
        <div className={'resultWrapper'}>
          <div>check element</div>
          <div>{use ? '포탈로 이동됨' : '여기에 있음'}</div>
        </div>
      </ExperimentLayout>
    </PortalStyled>
  );
};
