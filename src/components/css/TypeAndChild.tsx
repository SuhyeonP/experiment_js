import { TypeAndChildStyled } from './css.styled';

export const TypeAndChild = () => {
  return (
    <TypeAndChildStyled>
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
      <div className="div3">
        <div className={'parent1'}>
          <span className="box box1">span1</span>
          <p className="box box1">p1</p>
          <span className="box box1">span2</span>
          <p className="box box1">p2</p>
          <span className="box box1">span3</span>
          <p className="box box1">p3</p>
          <span className="box box1">span4</span>
          <p className="box box1">p4</p>
          <p className="box box1">p5</p>
        </div>
        <ul>
          <li>div3 - parent1 &#62; span:first-of-type (lightgreen)</li>
          <li>div3 - parent1&#62; span:nth-last-child(2) (lightblue)</li>
          <li>div3 - parent1&#62; span:last-of-type (lavender)</li>
        </ul>
      </div>

      <div className="div4">
        <div className={'parent2'}>
          <span className="box box1">span1</span>
          <p className="box box1">p1</p>
          <span className="box box1">span2</span>
          <p className="box box1">p2</p>
          <span className="box box1">span3</span>
          <p className="box box1">p3</p>
          <span className="box box1">span4</span>
          <p className="box box1">p4</p>
          <p className="box box1">p5</p>
        </div>
        <ul>
          <li>div4 - parent2 &#62; p:first-of-type (lightgreen)</li>
          <li>div4 - parent2 &#62; p:nth-last-child(2) (lightblue)</li>
          <li>div4 - parent2&#62; p:last-of-type (lavender)</li>
        </ul>
      </div>
    </TypeAndChildStyled>
  );
};
