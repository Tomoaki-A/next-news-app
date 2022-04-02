import Head from "next/head";
import { MainNews } from "../components/MainNews";
import { Pickup } from "../components/Pickup";
import { Sidebar } from "../components/Sidebar";
import { Weather } from "../components/Weather";

export default function Home(props) {
  const articles = props.articles;
  const weathers = props.weathers;
  const pickup = props.pickup;
  return (
    <div className="">
      <Head>
        <title>Web News / Top Stories</title>
      </Head>
      <Sidebar />
      <div className="custom-flex custom-ml">
        <MainNews articles={articles} />
        <div className="mt-12 ml-10 w-1/4 h-full">
          <Weather weathers={weathers} pickup={pickup} />
          <Pickup pickup={pickup} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // NewsAPIのトップ記事の情報を取得
  const pageSize = 10; // 取得したい記事の数
  const articleRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=278569a1c91541bbb0706c4f4ea3855a`
  );
  const articleJson = await articleRes.json();
  const articles = articleJson.articles;

  // NewsAPIのピックアップ記事の情報を取得
  const keyword = "software"; // キーワードで検索(ソフトウェア)
  const pickupRes = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=jp&sortBy=popularity&pageSize=5&apiKey=278569a1c91541bbb0706c4f4ea3855a`
  );
  const pickupJson = await pickupRes.json();
  const pickup = pickupJson.articles;

  // weatherAPIで天気の情報を取得
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=35.652832&lon=139.839478&units=metric&appid=ce4ff1a2cb4a0f6d6eb2623d8f9b0311`
  );
  const weatherJson = await weatherRes.json();
  const weathers = weatherJson;

  return {
    props: {
      articles,
      pickup,
      weathers,
    },
    revalidate: 60,
  };
};
