import { RequestEnum } from '@/enum';
import { http } from '@/utils';

export const apiGetList = (params: { id: string }) => {
  return http.request({
    url: '/api/products',
    method: RequestEnum.GET,
    params,
  });
};

export const apiDelItem = (params: { id: string }) => {
  return http.request({
    url: `/api/products/${params.id}`,
    method: RequestEnum.DELETE,
  });
};
