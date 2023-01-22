import { FC, ReactNode } from "react";
import { Divider, Space } from "antd";
import { Layout } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

const { Text } = Typography;

const { Content } = Layout;

export const GraphContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{
      padding: 32,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 8,
      boxShadow: "0px 0px 15px -3px rgba(0,0,0,0.15);",
    }}
  >
    {children}
    <Divider />

    <Space
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Avatar size={40} icon={<UserOutlined />} />
      <Space
        style={{
          fontSize: "2.3rem",
          color: "#c7c7c7",
        }}
      >
        <Text style={{ fontSize: "2rem", color: "#c7c7c7" }}>3</Text>
        <MessageOutlined />
      </Space>
    </Space>
  </div>
);
