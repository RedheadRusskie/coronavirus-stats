import { FC, Suspense } from "react";
import { Col, Layout, Row } from "antd";

import { AppHeader } from "@/components/app-header";
import { PageHeader } from "@/components/page-header";

import { UkCasesGraph } from "@/components/graphs/uk-cases";
import { MaleFemaleDeaths } from "@/components/graphs/male-female-deaths";

const { Content } = Layout;

const Index: FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Content>
        <PageHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{ padding: 50 }}>
            <Row gutter={50}>
              <Col span={12}>
                <UkCasesGraph />
              </Col>

              <Col span={12}>
                <MaleFemaleDeaths />
              </Col>
            </Row>
          </div>
        </Suspense>
      </Content>
    </Layout>
  );
};

export default Index;
