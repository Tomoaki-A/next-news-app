import Link from "next/link";
import { NewsProps } from "./types";

export const MainNews: React.FC<NewsProps> = (props) => {
  const diff = (published) => {
    const now = new Date();
    const data = new Date(published);
    const diff = now.getTime() - data.getTime();
    const passed = Math.floor(diff / (1000 * 60 * 60));

    if(passed < 24){
    return passed + "時間前";
    }else{
      const day = Math.floor(passed / 24);
      return day + "日前";
    }
  };
  

  return (
    <div className="w-2/3 p-8 mt-12">
      <h2 className="main-heading mb-12">
        {props.title ? props.title : "Headline"}
      </h2>
      <ul className="">
        {props
          ? props.articles.map((item, index) => {
              return (
                <li key={index} className="border rounded-2xl p-8 mb-6">
                  <Link href={item.url}>
                    <a target="_blank">
                      <div className="flex items-start justify-between">
                        <div className="">
                          <h2 className="text-2xl mb-3">{item.title}</h2>
                          <div className="text-xl text-gray-400">
                            {diff(item.publishedAt)}
                          </div>
                        </div>
                        <div className="image-wrap">
                          {item.urlToImage ? (
                            <img
                              className="w-full h-full"
                              src={item.urlToImage}
                              alt=""
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <div className="text-2xl">No Image...</div>
                            </div>
                          )}
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
