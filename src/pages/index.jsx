import { MainNews } from "../components/MainNews";
import { Sidebar } from "../components/Sidebar";
import { Weather } from "../components/Weather";

export default function Home(props) {
  const articles = props.articles;
  const weathers = props.weathers;
  return (
    <div className="">
      <Sidebar />
      <div className="custom-flex custom-ml">
        <MainNews articles={articles} />
        <Weather weathers={weathers}/>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // NewsAPIのトップ記事の情報を取得
  const pageSize = 15; // 取得したい記事の数
  const articleRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=278569a1c91541bbb0706c4f4ea3855a`
  );
  const articleJson = await articleRes.json();
  const articles = articleJson.articles;

  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=35.652832&lon=139.839478&units=metric&appid=ce4ff1a2cb4a0f6d6eb2623d8f9b0311`
  );
  const weatherJson = await weatherRes.json();
  const weathers = weatherJson;

  return {
    props: {
      articles,
      weathers,
    },
    revalidate: 60,
  };
};
