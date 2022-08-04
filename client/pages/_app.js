import CoinGecko from 'coingecko-api';
import { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
const CoinGeckoClient = new CoinGecko();

export const GlobalDataContext = createContext();

function MyApp({ Component, pageProps }) {
  const [ globalData, setGlobalData ] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await CoinGeckoClient.global();
      setGlobalData(data.data.data);
    })();
  }, [])

  return (
    <GlobalDataContext.Provider value={globalData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalDataContext.Provider>
  );
}

export default MyApp;
