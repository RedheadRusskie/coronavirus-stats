import { FC, ReactNode } from "react";

import { ConfigProvider, theme } from "antd";

const { useToken } = theme;

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    token: { "green-9": green },
  } = useToken();

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimaryHover: "#40b38e" },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
