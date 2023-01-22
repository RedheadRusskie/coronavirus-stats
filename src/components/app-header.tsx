import { FC } from "react";

import { Layout, theme, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;
const { useToken } = theme;

export const AppHeader: FC = () => {
  const {
    token: { colorBgContainer, boxShadowSecondary, margin, "green-9": green },
  } = useToken();

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: colorBgContainer,
        boxShadow: boxShadowSecondary,
        // to prevent overlap with shadow
        marginBottom: margin,
      }}
    >
      <Title level={4} style={{ margin: 0, color: "#40b38e" }}>
        Graphify
      </Title>
    </Header>
  );
};
