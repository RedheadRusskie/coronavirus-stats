import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";
import dayjs from "dayjs";
import { GraphContainer } from "./graph-container";
import { Divider, Typography } from "antd";

const { Title } = Typography;

type DataItem = {
  date: string;
  newCases: number;
};

export const UkCasesGraph: FC = () => {
  const { data } = useQuery({
    queryKey: ["ukCases"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coronavirus.data.gov.uk/v1/data?" +
          new URLSearchParams({
            filters: "areaType=nation;areaName=england",
            structure: JSON.stringify({
              date: "date",
              newCases: "newCasesByPublishDate",
            }),
          })
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const json = await response.json();

      const { data } = json as { data: DataItem[] };

      return data
        .filter((item) => item.newCases != 0)
        .map(({ date, newCases }) => ({
          newCases,
          date: dayjs(date).format("DD. MM"),
        }))
        .slice(0, 10);
    },
  });

  if (!data) {
    return null;
  }

  return (
    <GraphContainer>
      <Title style={{ alignSelf: "flex-start" }} level={3}>
        Total Cases
      </Title>
      <Divider />
      <VictoryChart domainPadding={10}>
        <VictoryAxis crossAxis />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000}k`} />
        <VictoryBar
          data={data}
          x="date"
          y="newCases"
          style={{
            data: {
              fill: ({ datum }) => {
                const { newCases } = datum as DataItem;

                if (newCases > 30_000) {
                  return "#37997a";
                }

                if (newCases > 20_000) {
                  return "#40b38e";
                }

                return "#4acfa5";
              },
            },
          }}
        />
      </VictoryChart>
    </GraphContainer>
  );
};
