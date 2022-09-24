import SidebarWithHeader from "../components/shared/SidebarWithHeader.tsx";
import { NextSeo } from "next-seo";
import { Flex, Heading } from "@chakra-ui/react";
import MyChart from "../components/compare/MyChart";

export const data1 = {
  labels: [
    "Material 1",
    "Material 2",
    "Material 3",
    "Material 4",
    "Material 5",
    "Material 6",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 5, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export const data2 = {
  labels: [
    "Material 1",
    "Material 2",
    "Material 3",
    "Material 4",
    "Material 5",
    "Material 6",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 19, 3, 9, 17, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Index() {
  return (
    <>
      <NextSeo title="Compare" />
      <SidebarWithHeader>
        <Flex
          bg="column-bg"
          flexDir="row"
          position="relative"
          backgroundColor="#eee"
        >
          <Flex py="4rem" flexDir="column" align="center" width="50%">
            <Heading fontSize="3xl" fontWeight={600}>
              Direction 1
            </Heading>
            <MyChart data={data1} />
          </Flex>
          <Flex py="4rem" flexDir="column" align="center" width="50%">
            <Heading fontSize="3xl" fontWeight={600}>
              Direction 2
            </Heading>
            <MyChart data={data2} />
          </Flex>
        </Flex>
      </SidebarWithHeader>
    </>
  );
}
