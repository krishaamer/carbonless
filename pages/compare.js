import SidebarWithHeader from "../components/SidebarWithHeader.tsx";
import { Text } from "@chakra-ui/react";
import MyChart from "../components/MyChart";

export default function Index() {
  return (
    <SidebarWithHeader>
      <Text>Compare will be here</Text>
      <MyChart />
    </SidebarWithHeader>
  );
}
