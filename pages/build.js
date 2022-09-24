import SidebarWithHeader from "../components/shared/SidebarWithHeader.tsx";
import MultiDragDrop from "../components/build/MultiDragDrop";
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
