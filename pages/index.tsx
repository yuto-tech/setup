import type { NextPage } from 'next';
import React, { useState, useEffect, memo } from 'react';

const Home: NextPage = () => {
  console.log('レンダリングしてるよ');
  return (
    <>
      <div>レンダリングの確認</div>
      <Child />
    </>
  );
};

export default Home;

/*eslint-disable-line*/ const Child = memo(() => {
  const [count, setCount] = useState(0);
  const text: string[] = ['Zero', 'one', 'two', 'three'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 3) {
        return setCount(0);
      }
      setCount((i) => i + 1);
    }, 1000);

    return () => {
      console.log(count);
      clearTimeout(interval);
    };
  }, [count]);

  return (
    <>
      <h1 className='text-3xl font-bold underline'>{text[count]}</h1>
    </>
  );
});
