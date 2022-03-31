import Link from "next/link";

export const MainNews = (props) => {
  // 経過時間を返す
  const diff = (published) => {
    const now = new Date();
    const data = new Date(published);
    const diff = now.getTime() - data.getTime();
    const passed = Math.floor(diff / (1000 * 60 * 60));
    return passed;
  };

  return (
    <div className="w-2/3 p-8 mt-12">
      <h2 className="main-heading mb-12">Headline</h2>
      <ul className="">
        {props
          ? props.articles.map((item, index) => {
              return (
                <li key={index} className="border rounded-2xl p-8 mb-6">
                  <Link href={item.url}>
                    <a target="_blank">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl mb-3">{item.title}</h2>
                          <div className="text-xl text-gray-400">{diff(item.publishedAt)}時間前</div>
                        </div>
                        <div className="w-64 max-h-64">
                          <img
                            className="w-full h-hull"
                            src={item.urlToImage}
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
