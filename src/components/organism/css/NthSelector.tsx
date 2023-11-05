import { NthSelectorStyled } from './css.styled';
import { ExperimentLayout } from '../../molecules/layout/layout.styled';
import { Text } from 'components/atom/text/Text';
import { Gist } from 'components/atom/gist/Gist';

export const NthSelector = (): JSX.Element => {
  return (
    <NthSelectorStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div className={'exp1'}>
            <Text as={'h1'}>nth-type</Text>
            <div className={'type'}>
              <p>p: child1</p>
              <span>span: child2</span>
              <span>span: child3</span>
              <p>p: child4</p>
              <p>p: child5</p>
              <span>span: child6</span>
              <p>p: child7</p>
              <span>span: child8</span>
              <p>p: child9</p>
            </div>
          </div>
          <div className={'exp2'}>
            <Text as={'h1'}>nth-child</Text>
            <div className={'child'}>
              <p>p: child1</p>
              <span>span: child2</span>
              <span>span: child3</span>
              <p>p: child4</p>
              <p>p: child5</p>
              <span>span: child6</span>
              <p>p: child7</p>
              <span>span: child8</span>
              <p>p: child9</p>
            </div>
          </div>
        </div>
        <div className={'resultWrapper'}>
          <Text as={'h1'} className={'resultTitle'}>
            first-child와 first-of-type은 똑같이 자식 형제 요소 고르는것같은데 뭐가 달라?
          </Text>
          <Text>같은 css 로 사용함! but 차이는 child, type만 다름</Text>
          <br />
          <div className={'explainResults'}>
            <Gist id={'0eea088ab7000b90549f7d2489cfca7a'} />
          </div>
        </div>
      </ExperimentLayout>
    </NthSelectorStyled>
  );
};
