import { useEffect, useState } from 'react';

const Hooks = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count > 10) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  );
};

export default Hooks;
