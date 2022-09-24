import SidebarWithHeader from "../components/shared/SidebarWithHeader.tsx";
import { NextSeo } from "next-seo";

export default function Define() {
  return (
    <>
      <NextSeo title="Browse" />
      <SidebarWithHeader>
        Define will be here
      </SidebarWithHeader>
    </>
  );
}
