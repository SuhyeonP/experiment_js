import { TypeAndChild } from 'components/css/TypeAndChild';
import { useMemo, useState } from 'react';
import Title from '../components/text/Title';

const cssTypes = {
  DEFAULT: 'DEFAULT',
  'TYPE&CHILD': 'TYPE&CHILD',
} as const;

type CssType = keyof typeof cssTypes;

const CSS = (): JSX.Element => {
  let type: CssType = 'TYPE&CHILD';

  const explain = useMemo(() => {
    switch (type) {
      case 'TYPE&CHILD':
        return (
          <>
            <Title>first-child와 first-of-type은 똑같이 자식 형제 요소 고르는것같은데 뭐가 달라?</Title>
            <ul>
              <li>div &#62; p:first-child</li>
              <li>div 하위의 첫번째 자식인 요소가 P태그인 요소</li>
              <li>div의 자손 요소중에 first-child를 고르는데 그게 p태그이면 스타일 적용.</li>
              <li>만약 p태그가 없다면 스타일 적용 안함</li>
              <li>div fist-child is p</li>
            </ul>
            <br />
            <br />
            <ul>
              <li>div &#62; p:first-of-type</li>
              <li>div 하위의 P태그인 요소 중 첫번째 요소</li>
              <li>div의 자손 요소중에 p태그를 모두 고르고 그 중 first-of-type 스타일 적용.</li>
              <li>div p fist-of-type</li>
            </ul>
          </>
        );
      case 'DEFAULT':
      default:
        return '';
    }
  }, [type]);

  const cssComponent = useMemo(() => {
    switch (type) {
      case 'TYPE&CHILD':
        return <TypeAndChild />;
      case 'DEFAULT':
      default:
        return <></>;
    }
  }, [type]);

  return (
    <>
      <div style={{ display: 'flex', gap: '4px' }}>
        {Object.keys(cssTypes).map(key => (
          <button
            key={key}
            onClick={() => {
              type = key as CssType;
            }}
          >
            {key}
          </button>
        ))}
      </div>
      <br />
      <div>{explain}</div>
      <br />
      <div style={{ border: '3px solid green', marginTop: '10px', minHeight: '500px' }}>{cssComponent}</div>
    </>
  );
};

export default CSS;
