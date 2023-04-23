import { apiDelItem, apiGetList } from '@/api/products';
import { useRequest } from 'ahooks';

export default function Model() {
  const { loading: delLoading, run: del } = useRequest(
    async (id: string) => {
      await apiDelItem({ id });
      return Promise.resolve();
    },
    {
      manual: true,
    },
  );

  const {
    data: list,
    loading: listLoading,
    run: getList,
  } = useRequest(
    async () => {
      const res = await apiGetList({ id: '1' });
      if (res) {
        console.log('res', res);
        return res.data ?? [];
      }
      return {};
    },
    {
      manual: true,
    },
  );
  return {
    list,
    listLoading,
    getList,
    del,
    delLoading,
  };
}
