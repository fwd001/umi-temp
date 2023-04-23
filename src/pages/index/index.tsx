import yayJpg from '@/assets/yay.jpg';
import { useFullscreen } from 'ahooks';
import { useEffect, useState,useRef } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const dirRef = useRef(null)

  const [isFullscreen, { toggleFullscreen }] = useFullscreen(dirRef);


  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (!loading) {
    return <>我在等待接口</>;
  }

  return (
    <div ref={dirRef}  style={{ height: '2000px' }} className='bg-#fff'>
      {isFullscreen? '全屏': '非全屏'}
      <h2 className="c-#f40 text-size-50px" onClick={toggleFullscreen}>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
