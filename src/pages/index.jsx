import { useEffect, useState } from "react";
import { MainNews } from "../components/MainNews";
import { Sidebar } from "../components/Sidebar";
import { SubContents } from "../components/SubContents";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const pageSize = 10;
  const [news, setNews] = useState([]);

  useEffect(() => {
    const data = useFetch(
      `https://newsapi.org/v2/top-headlines?country=jp&pageSize=10&apiKey=278569a1c91541bbb0706c4f4ea3855a`
    );
  }, []);

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

// export const getStaticProps = async () => {
//   // NewsAPIのトップ記事の情報を取得
//   const pageSize = 10; // 取得したい記事の数
//   const res = await fetch(
//     `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=278569a1c91541bbb0706c4f4ea3855a`
//   );
//   const json = await res.json();
//   const articles = json.articles;

//   return {
//     props: {
//       articles,
//     },
//     revalidate: 60 * 10,
//   };
// };
