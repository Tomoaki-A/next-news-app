import { MainNews } from "../components/MainNews";
import { Sidebar } from "../components/Sidebar";
import { SubContents } from "../components/SubContents";

export default function Home() {
  return (
    <div className="">
      <Sidebar />
      <div className="custom-flex ml-96">
        <MainNews />
        <SubContents />
      </div>
    </div>
  );
}
