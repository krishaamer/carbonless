import SidebarWithHeader from "../components/SidebarWithHeader.tsx";
import MultiDragDrop from "../components/MultiDragDrop";
import { NextSeo } from "next-seo";

export default function Index() {
  return (
    <>
      <NextSeo title="Build" />
      <SidebarWithHeader>
        <MultiDragDrop />
      </SidebarWithHeader>
    </>
  );
}
