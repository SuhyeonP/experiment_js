import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { ExperimentLayout } from '../../molecules/layout/layout.styled';
import { HookTimingStyled } from './hook.styled';
import { Text } from '../../atom/text/Text';

// useMemo, useLayout, useEffect 는 뎊스 상관없이 시작시 선언 순서대로 동작함
// 각각 말고 같은 hook에 대하여
// useMemo의 클린업은 없음! - 값을 메모이제이션 하는거라 없는듯!
export const HookTiming = (): JSX.Element => {
  const [results, setResults] = useState<Array<string | number>>([]);
  const [count, setCount] = useState(0);

  useMemo(() => {
    setResults(prev => prev.concat(['useMemo']));

    return () => {
      console.log('clean up at useMemo - no deps');
      setResults(prev => prev.concat(['clean up at useMemo']));
    };
  }, []);

  useLayoutEffect(() => {
    setResults(prev => prev.concat(['useLayoutEffect']));

    return () => {
      console.log('clean up at useLayoutEffect - no deps');
      setResults(prev => prev.concat(['clean up at useLayoutEffect']));
    };
  }, []);

  useEffect(() => {
    setResults(prev => prev.concat(['useEffect']));

    return () => {
      console.log('clean up at useEffect - no deps');
      setResults(prev => prev.concat(['cleanUp at useEffect']));
    };
  }, []);

  useEffect(() => {
    setResults(prev => prev.concat([`useEffect && count: ${count}`]));

    return () => {
      console.log('clean up at useEffect - count deps');
      setResults(prev => prev.concat([`cleanUp at useEffect && count: ${count}`]));
    };
  }, [count]);

  useMemo(() => {
    setResults(prev => prev.concat([`useMemo && count: ${count}`]));

    return () => {
      console.log('clean up at useMemo - count deps');
      setResults(prev => prev.concat([`clean up at useMemo && count: ${count}`]));
    };
  }, [count]);

  useLayoutEffect(() => {
    setResults(prev => prev.concat([`useLayoutEffect && count: ${count}`]));

    return () => {
      console.log('clean up at useLayoutEffect - count deps');
      setResults(prev => prev.concat([`clean up at useLayoutEffect && count: ${count}`]));
    };
  }, [count]);

  return (
    <HookTimingStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div>
            <button onClick={() => setCount(prev => prev - 1)}>count down</button>
            <Text>{count}</Text>
            <button onClick={() => setCount(prev => prev + 1)}>count up</button>
            <br />
            <br />
            <button onClick={() => setCount(0)}>count reset</button>
            <button onClick={() => setResults([])}>reset result</button>
          </div>
        </div>
        <div className={'resultWrapper'}>
          <div className={'results'}>
            {results.map((result, idx) => (
              <Text key={result.toString() + idx}>
                [{idx}]{result}
              </Text>
            ))}
          </div>
        </div>
      </ExperimentLayout>
    </HookTimingStyled>
  );
};
