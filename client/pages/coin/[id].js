import CoinGecko from "coingecko-api";
import React, { useState } from "react";
import CoinChart from "../../components/CoinChart/CoinChart";
import convertToInternationalCurrencySystem from "../../utils/convertToInternationalCurrencySystem";
const CoinGeckoClient = new CoinGecko();

const id = ({ coinData, chartData }) => {

  const htmlTagRegex = /(<([^>]+)>)/gi;

  const { name, image, symbol, description } = coinData;
  const {
    current_price,
    market_cap_rank,
    market_cap,
    circulating_supply,
    max_supply,
    price_change_24h,
  } = coinData.market_data;

  const reformatChartData = (chartData) => {
    return chartData.map((array) => {
      return {
        x: array[0],
        y: array[1],
      };
    });
  };

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <button>Add</button>
      </div>
      <div>{market_cap_rank}</div>
      <div>
        <img src={image.large} alt="crypto-logo-image" />
        {`${name} ${symbol.toUpperCase()}`}
      </div>
      <div>{`$${current_price.usd.toFixed(2)}`}</div>
      <div>{`$${price_change_24h.toFixed(2)}`}</div>
      <div>{`${name}`}</div>
      <div>{`$${convertToInternationalCurrencySystem(
        Math.round(market_cap.usd)
      )}`}</div>
      <div>
        {convertToInternationalCurrencySystem(Math.round(circulating_supply))}
      </div>
      <div>{max_supply || "N/A"}</div>
      <CoinChart
        dayChartData={reformatChartData(chartData.day)}
        weekChartData={reformatChartData(chartData.week)}
        monthChartData={reformatChartData(chartData.month)}
      />
      <div>{description.en.replace(htmlTagRegex, "")}</div>

      <div>bullish/bearish</div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const coinData = await CoinGeckoClient.coins.fetch(context.params.id);

  const chartData1day = await CoinGeckoClient.coins.fetchMarketChart(
    context.params.id,
    { days: 1 }
  );
  const chartData7day = await CoinGeckoClient.coins.fetchMarketChart(
    context.params.id,
    { days: 7 }
  );
  const chartData30day = await CoinGeckoClient.coins.fetchMarketChart(
    context.params.id,
    { days: 30 }
  );

  return {
    props: {
      coinData: coinData.data,
      chartData: {
        day: chartData1day.data.prices,
        week: chartData7day.data.prices,
        month: chartData30day.data.prices,
      },
    },
  };
};

export default id;
