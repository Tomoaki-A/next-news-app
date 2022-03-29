import { MainNews } from "../../components/MainNews";
import { Sidebar } from "../../components/Sidebar";
import { SubContents } from "../../components/SubContents";

export default function Technology(props) {
    const articles = props.articles
    return (
      <div className="">
        <Sidebar />
        <div className="custom-flex custom-ml">
          <MainNews articles={articles}/>
          <SubContents />
        </div>
      </div>
    );
}

export const getStaticProps = async () => {
    // NewsAPIのトップ記事の情報を取得
    const pageSize = 10; // 取得したい記事の数
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&category=technology&pageSize=${pageSize}&apiKey=278569a1c91541bbb0706c4f4ea3855a`
    );
    const json = await res.json();
    const articles = json.articles;
  
    return {
      props: {
        articles,
      },
      revalidate: 60,
    };
  };