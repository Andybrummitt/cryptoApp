import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale'; 

const CoinsTable = ({ data }) => {
  const calculatePercentageOfMaxSupply = (maxSupply, circulatingSupply) => {
    if (maxSupply && circulatingSupply) {
      const percentage = (circulatingSupply / maxSupply) * 100;
      return `${percentage.toFixed(2)}%`;
    }
    return "N/A";
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Add to watchlist</th>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>24hr change</th>
          <th>Market Cap</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
          <th>Percentage of max supply</th>
          <th>Graph</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => {
          const {
            index,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
            circulating_supply,
            market_cap,
            market_cap_rank,
            max_supply,
          } = coin;
          return (
            <Link href={`/coin/${name.toLowerCase()}`}>
            <tr key={uuidv4()} >
              <td>
                <button>Add</button>
              </td>
              <td>{market_cap_rank}</td>
              <td>
                <img src={image} alt="crypto-logo-image" />
                {`${name} ${symbol.toUpperCase()}`}
              </td>
              <td>{`$${current_price.toFixed(2)}`}</td>
              <td>{`${price_change_percentage_24h.toFixed(2)}`}</td>
              <td>{`$${market_cap}`}</td>
              <td>{circulating_supply}</td>
              <td>{max_supply || "N/A"}</td>
              <td>
                {calculatePercentageOfMaxSupply(max_supply, circulating_supply)}
              </td>
              <td>graph</td>
            </tr>
            </Link>
          );
        })}
      </tbody>
    </table>
  );
};

export default CoinsTable;
