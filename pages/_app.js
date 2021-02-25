import { Provider } from "next-auth/client";
import "../styles/globals.css";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
