import CoinGecko from "coingecko-api";
import Head from "next/head";
import CoinsTable from "../components/CoinsTable/CoinsTable";
import styles from "../styles/Home.module.css";
const CoinGeckoClient = new CoinGecko();

export default function Home({ result }) {
  const { data } = result;
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoSpace</title>
        <meta name="description" content="Crypto Space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to CryptoSpace</h1>
        <h1>Coins List</h1>
        <CoinsTable data={data} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
  };

  const result = await CoinGeckoClient.coins.markets(params);
  return {
    props: { result },
  };
}
