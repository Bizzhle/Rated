import "../styles/globals.css";
// import axios from "axios";
// import { BASE_API_URL } from "./api/constants";
import Layout from "../components/Layout";
// import { AppWrapper } from "../contexts/StoreList";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
