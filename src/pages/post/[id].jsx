import { useRouter } from "next/router";

export default function Topic(props) {

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const topicArticles = props.topicArticles;
  console.log(topicArticles);

  return (
    <div>
      <h1>hello</h1>
      {topicArticles
        ? topicArticles.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })
        : null}
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
  console.log(params);
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&country=jp&apiKey=278569a1c91541bbb0706c4f4ea3855a`
  );
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson.articles;

  const title = params.id;

  return {
    props: { topicArticles, title },
    revalidate: 60,
  };
}
