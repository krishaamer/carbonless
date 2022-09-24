import SidebarWithHeader from "../components/shared/SidebarWithHeader.tsx";
import MyDragDrop from "../components/browse/MyDragDrop";
import { NextSeo } from "next-seo";


export default function Index() {
  return (
    <>
      <NextSeo title="Browse" />
      <SidebarWithHeader>
        <MyDragDrop />
      </SidebarWithHeader>
    </>
  );
}
