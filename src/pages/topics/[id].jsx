import { Sidebar } from "../../components/Sidebar";
import { MainNews } from "../../components/MainNews";
import { Weather } from "../../components/Weather";
import { Pickup } from "../../components/Pickup";
import Head from "next/head";

export default function Topic(props) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  const articles = props.topicArticles;
  const weathers = props.weathers;
  const pickup = props.pickup;
  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  return (
    <div className="">
      <Head>
        <title>Web News / {title}</title>
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

//params.idにはtest/???の???が入る
export async function getStaticProps({ params }) {
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&country=jp&apiKey=278569a1c91541bbb0706c4f4ea3855a`
  );
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson.articles;

  const title = params.id;

  // NewsAPIのピックアップ記事の情報を取得
  const keyword = "software"; // キーワードで検索(ソフトウェア)
  const pickupRes = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=jp&sortBy=popularity&pageSize=5&apiKey=278569a1c91541bbb0706c4f4ea3855a`
  );
  const pickupJson = await pickupRes.json();
  const pickup = pickupJson.articles;

  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=35.652832&lon=139.839478&units=metric&appid=ce4ff1a2cb4a0f6d6eb2623d8f9b0311`
  );
  const weatherJson = await weatherRes.json();
  const weathers = weatherJson;

  return {
    props: { topicArticles, weathers, title ,pickup},
    revalidate: 60,
  };
}
