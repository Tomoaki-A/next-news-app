import Link from "next/link";

export const Header = () => {
  return (
    <div className="main-bg w-screen px-10 py-4 fixed shadow-xl">
      <Link href="/">
        <a>
          <h1 className="main-heading">Web News</h1>
        </a>
      </Link>
    </div>
  );
};
