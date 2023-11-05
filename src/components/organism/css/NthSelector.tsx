import { NthSelectorStyled } from './css.styled';
import { ExperimentLayout } from '../../molecules/layout/layout.styled';

export const NthSelector = (): JSX.Element => {
  return (
    <NthSelectorStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div className={'div1'}>
            <h1>Type</h1>
            <div className={'type'}>
              <p>
                child1: p:first-child
                <span>span</span>
              </p>
              <p>child2: p:nth-child(2) color:orange - 오버랩</p>
              <p>child3: :nth-child(3)</p>
              <p>child4: p:nth-child(4n)</p>
              <p>child5: &:nth-child(5)</p>
              <p>child6: p:nth-child(4n + 2)</p>
              <p>child7: p:last-child</p>
            </div>
          </div>
          <div className={'div2'}>
            <h1>Child</h1>
            <div className={'child'}>
              <p>
                child1: p:first-of-type
                <span>span</span>
              </p>
              <p>child2: p:nth-of-type(2) color:orange</p>
              <p>child3: :nth-of-type(3)</p>
              <p>child4: p:nth-of-type(4n)</p>
              <p>child5: &:nth-of-type(5)</p>
              <p>child6: p:nth-of-type(4n)</p>
              <p>child7: p:last-child</p>
            </div>
          </div>
        </div>
        <div className={'resultWrapper'}></div>
      </ExperimentLayout>
    </NthSelectorStyled>
  );
};
