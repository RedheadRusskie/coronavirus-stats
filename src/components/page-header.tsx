import { FC } from "react";

import {
  DownloadOutlined,
  FilterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Space, Button } from "antd";

const { Header } = Layout;
const { Title, Text } = Typography;

export const PageHeader: FC = () => (
  <Header style={{ backgroundColor: "unset" }}>
    <Space style={{ width: "100%", justifyContent: "space-between" }}>
      <Title style={{ margin: 0 }} level={5}>
        COVID Stats
      </Title>
      <Space>
        <Button>
          Export to PDF <DownloadOutlined />
        </Button>
        <Button>
          Notes <Text style={{ color: "#718096" }}>(3)</Text> <MenuOutlined />
        </Button>
        <Button>
          Filter
          <FilterOutlined />
        </Button>
      </Space>
    </Space>
  </Header>
);
