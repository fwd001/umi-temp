import { Button } from 'antd';
import type { Ref } from 'react';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { BoxRefI } from './type';

const Box = (props: { onRef: Ref<BoxRefI> }) => {
  const [isred, setRed] = useState(false);
  console.log('render');

  function click() {
    console.log('click 一下');
  }

  useImperativeHandle(props.onRef, () => ({
    setRed,
  }));

  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <div className="h-40px">
      <span style={{ color: isred ? 'orange' : 'blue' }}>sadfasdf{ref.cu}</span>
      <button type="button" onClick={handleClick}>
        Click me!
      </button>
      <Button onClick={click}>按一下</Button>
    </div>
  );
};

export default React.memo(Box);
