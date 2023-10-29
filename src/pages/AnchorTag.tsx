// import { useEffect } from 'react';

const AnchorTag = (): JSX.Element => {
  function handleClickInner(arg?: any) {
    console.log(arg);
    return 'https://www.naver.com';
  }
  function handleClickInnerReturnUndefined(arg?: any) {
    console.log(arg);
    return 'https://www.naver.com';
  }

  return (
    <>
      <h1>(attach js)</h1>
      <a href={`javascript:${handleClickInner()}`}>inner return string</a>
      <br />
      <a href={`javascript:${handleClickInner('something~')}`}>inner return string</a>
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<a href={`javascript:${handleClickInner('something~')}`} onClick={'return false;'}>onclick return false\n</a>",
        }}
      />
      <br />
      <br />
      <h1>(not attach js)</h1>
      <a href={handleClickInnerReturnUndefined()}>inner return string</a>
      <br />
      <a href={handleClickInnerReturnUndefined('something~return:undefined')}>inner return string</a>
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<a href={`javascript:${handleClickInnerReturnUndefined('something~')}`} onClick={'return false;'}>onclick return false\n</a>",
        }}
      />
    </>
  );
};

export default AnchorTag;
