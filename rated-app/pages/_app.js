import "../styles/globals.css";
import { CookiesProvider } from "react-cookie";

import Layout from "../components/Layout";
import { AuthContextProvider } from "../stores/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
