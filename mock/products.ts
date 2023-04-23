import { defineMock } from 'umi';

type Product = {
  id: string;
  name: string;
};

let products: Product[] = [
  { id: '1', name: 'Umi' },
  { id: '2', name: 'Ant Design' },
  { id: '3', name: 'Ant Design Pro' },
  { id: '4', name: 'Dva' },
];

function getList() {
  const list = [];
  for (let index = 0; index < 30; index++) {
    const data = {
      index,
      name: 'Umi' + index,
    };
    list.push(data);
  }
  return list;
}

export default defineMock({
  'GET /api/products': (_, res) => {
    res.send({
      status: 'ok',
      code: '0',
      data: products,
    });
  },
  'DELETE /api/products/:id': (req, res) => {
    products = products.filter((item) => item.id !== req.params.id);
    res.send({ status: 'ok', code: '0', msg: '成功' });
  },

  'GET /api/infinite': (_, res) => {
    res.send({
      status: 'ok',
      code: '0',
      data: getList(),
    });
  },
});
