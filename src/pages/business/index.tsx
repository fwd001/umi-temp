import { apiDelItem, apiGetList } from '@/api/products';
import ProductList from '@/components/ProductList';
import { useMutation, useQuery, useQueryClient } from 'umi';
import styles from './index.less';

export default function Page() {
  const queryParams = { id: '2' };
  const queryClient = useQueryClient();
  const {
    data: projects,
    isLoading,
    isFetching: projectsIsF,
  } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: ({ queryKey }) => apiGetList(queryKey[1] as { id: string }),
  });
  const productsDeleteMutation = useMutation({
    mutationFn(id: string) {
      return apiDelItem({ id });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  if (isLoading) return <>loading...</>;

  return (
    <div>
      <h1 className={styles.title}>Page products</h1>
      <button
        type="button"
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ['products', { id: '3' }] })
        } 
      >
        查询3
      </button>
      <div>{projectsIsF ? 'loading...' : null}</div>
      <ProductList
        products={projects?.data}
        onDelete={(id) => productsDeleteMutation.mutate(id)}
      />
    </div>
  );
}
