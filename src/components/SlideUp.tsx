import { SlideUpI } from '@/pages/mall/type';
import { useEventListener } from 'ahooks';
import type { ReactNode, Ref } from 'react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const SlideUp = (
  props: {
    children: ReactNode;
    header: ReactNode;
  },
  ref: Ref<SlideUpI>,
) => {
  const [isvisible, setIsVisible] = useState(true);
  const divRef = useRef(null);

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsVisible(false);
    }
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  const seeHi = (msg = '') => {
    console.log('hi' + msg);
  };

  useImperativeHandle(ref, () => ({
    seeHi,
    el: divRef.current,
  }));

  // 监听键盘事件，按下 ESC 键关闭组件
  useEventListener('keydown', handleEsc);

  return (
    <div
      ref={divRef}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '12px',
        color: '#f40',
        background: '#fff',
        boxShadow: '0 -4px 12px rgb(0 0 0 / 15%)',
        transition: 'transform 0.3s ease-out',
        transform: isvisible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      {props.header}
      {props.children}
      <button type="button" onClick={handleClose}>
        关闭
      </button>
    </div>
  );
};

export default forwardRef(SlideUp);
