import Link from "next/link";

export const Pickup = (props) => {
  const pickup = props.pickup;

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
    <div className="mt-12 border rounded-2xl h-full">
      <h2 className="text-4xl px-4 py-6 border-b">PickUp News</h2>
      <div className="px-12 py-6">
        <ul>
          {pickup.map((item, index) => {
            return (
              <li className="mb-10" key={index}>
                <Link href={item.url}>
                    <a target="_blank">
                      <div className="flex items-start justify-between">
                        <div className="">
                          <h2 className="text-xl mb-3">{item.title}</h2>
                          <div className="text-lg text-gray-400">
                            {diff(item.publishedAt)}
                          </div>
                        </div>
                        <div className="image-wrap-s">
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
          })}
        </ul>
      </div>
    </div>
  );
};
