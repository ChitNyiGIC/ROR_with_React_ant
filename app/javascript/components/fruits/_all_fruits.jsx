import React from "react";
import { Table, Space, Popconfirm, Button } from "antd";

const AllFruits = (props) => {
  const columns = [
    { title: "選択", key: "id", dataIndex: "id" },
    { title: "URL/タイトル", key: "url", dataIndex: "url" },
    { title: "ページ内文字数", key: "noOfChar", dataIndex: "noOfChar" },
    {
      title: "見出し",
      key: "action",
      render: (_text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            size="small"
            onClick={() => props.handleModal(record)}
          >
            編集
          </Button>
        </Space>
      ),
    },
  ];

  var fruits = props.fruits.map((fruit) => {
    return {
      id: fruit.id,
      url: fruit.name,
      noOjChar: fruit.description,
    };
  });

  return (
    <div>
      <Table
        className="table-striped-rows"
        dataSource={fruits}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default AllFruits;
