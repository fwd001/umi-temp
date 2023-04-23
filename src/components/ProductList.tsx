import { Button, Popconfirm, Table } from 'antd';
import React from 'react';

interface Props {
  products: { name: string; id: string }[];
  onDelete: (id: string) => void;
}

const ProductList: React.FC<Props> = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render(_: string, record: { id: string }) {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table rowKey="id" dataSource={products} columns={columns} />;
};

export default ProductList;
