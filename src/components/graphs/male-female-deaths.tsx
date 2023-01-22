import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { VictoryPie } from "victory";
import { Divider, Typography } from "antd";

const { Title } = Typography;
import { GraphContainer } from "./graph-container";

export const MaleFemaleDeaths: FC = () => {
  const { data } = useQuery({
    queryKey: ["maleFemaleDeaths"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coronavirus.data.gov.uk/v1/data?" +
          new URLSearchParams({
            filters: "areaType=nation;areaName=england",
            structure: JSON.stringify({
              female: "femaleDeaths28Days",
              male: "maleDeaths28Days",
            }),
          })
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const json = await response.json();

      type ValueRecord = { value: number };

      const sumValueRecords = (records: ValueRecord[]) =>
        records.reduce((acc, curr) => acc + curr.value, 0);

      const {
        data: [data],
      } = json as {
        data: [{ female: ValueRecord[]; male: ValueRecord[] }];
      };

      return [
        {
          gender: "Male",
          value: sumValueRecords(data.male),
        },
        {
          gender: "Female",
          value: sumValueRecords(data.female),
        },
      ];
    },
  });

  if (!data) {
    return null;
  }

  return (
    <GraphContainer>
      <Title style={{ alignSelf: "flex-start" }} level={3}>
        Male To Female Deaths
      </Title>
      <Divider />
      <VictoryPie
        colorScale={["#3aa684", "#37997a"]}
        data={data}
        x="gender"
        y="value"
      />
    </GraphContainer>
  );
};
