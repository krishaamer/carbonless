import SidebarWithHeader from "../components/SidebarWithHeader.tsx";
import MyDragDrop from "../components/MyDragDrop";
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
