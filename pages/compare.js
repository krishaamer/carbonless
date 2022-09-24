import SidebarWithHeader from "../components/SidebarWithHeader.tsx";
import { Flex, Text, Heading } from "@chakra-ui/react";
import MyChart from "../components/MyChart";

export default function Index() {
  return (
    <SidebarWithHeader>
      <Flex
        bg="column-bg"
        flexDir="column"
        position="relative"
        backgroundColor="#eee"
      >
        <Flex py="4rem" flexDir="column" align="center" width="40%">
          <Heading fontSize="3xl" fontWeight={600}>
            Direction 1
          </Heading>
          <MyChart />
        </Flex>
        <Flex py="4rem" flexDir="column" align="center" width="40%">
          <Heading fontSize="3xl" fontWeight={600}>
            Direction 2
          </Heading>
          <MyChart />
        </Flex>
      </Flex>
    </SidebarWithHeader>
  );
}
