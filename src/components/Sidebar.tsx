import Link from "next/link";

export const Sidebar = () => {
  const navList = [
    {
      path: "/",
      title: "Top stories",
    },
    {
      path: "/topics/business",
      title: "Business",
    },
    {
      path: "/topics/technology",
      title: "Technology",
    },
    {
      path: "/topics/entertainment",
      title: "Entertainment",
    },
    {
      path: "/topics/sports",
      title: "Sports",
    },
  ];

  return (
    <div className="fixed main-heading px-10 mt-10">
      <ul>
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
