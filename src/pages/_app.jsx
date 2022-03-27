import "../styles/globals.css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main-css">
      <Header />
      <div className="pt-24">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
