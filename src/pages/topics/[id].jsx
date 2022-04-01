import { useRouter } from "next/router";
import { Sidebar } from "../../components/Sidebar";
import { MainNews } from "../../components/MainNews";
import { Weather } from "../../components/Weather";

export default function Topic(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const articles = props.topicArticles;
  const weathers = props.weathers;
  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  return (
    <div className="">
      <Sidebar />
      <div className="custom-flex custom-ml">
        <MainNews articles={articles} title={title} />
        <Weather weathers={weathers} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
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

  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=35.652832&lon=139.839478&units=metric&appid=ce4ff1a2cb4a0f6d6eb2623d8f9b0311`
  );
  const weatherJson = await weatherRes.json();
  const weathers = weatherJson;

  return {
    props: { topicArticles, weathers, title },
    revalidate: 60,
  };
}
