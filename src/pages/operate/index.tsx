import ReactSvgUrl, {
  ReactComponent as SvgReact,
} from '@/assets/svg/react.svg';
import { useModel } from 'umi';

const DocsPage = () => {
  const { add, minus, count } = useModel('counterModel', (model) => ({
    add: model.increment,
    minus: model.decrement,
    count: model.counter,
  }));
  return (
    <>
      <SvgReact className="c-red w-30 fill-red" />
      <img src={ReactSvgUrl} alt="icon" />
      <span className='umi-iconfont uicon-fe text-size-40 c-blue'></span>
      <p className="bg-#ccc">This is umi docs.</p>
      <div>
        <div>{count}</div>
        <button type="button" onClick={add}>
          add by 1
        </button>
        <button type="button" onClick={minus}>
          minus by 1
        </button>
      </div>
    </>
  );
};

export default DocsPage;
