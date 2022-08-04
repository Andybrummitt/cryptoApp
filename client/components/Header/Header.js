import React, { useContext } from "react";
import { GlobalDataContext } from "../../pages/_app";
import convertToInternationalCurrencySystem from "../../utils/convertToInternationalCurrencySystem.js";
import styles from "./navbar.module.css";

const Header = () => {
  const globalData = useContext(GlobalDataContext);
  console.log(globalData);
  return (
    <header>
      <ul className={styles.dataLinks}>
        {globalData && (
          <>
            <li>
              Active Cryptocurrencies: {globalData.active_cryptocurrencies}
            </li>
            <li>
              Market Cap:{" "}
              {`$${convertToInternationalCurrencySystem(
                Math.floor(globalData.total_market_cap.usd)
              )}`}
            </li>
            <li>
              24h Volume:{" "}
              {`$${convertToInternationalCurrencySystem(
                Math.floor(globalData.total_volume.usd)
              )}`}
            </li>
            <li>
              BTC Dominance:{" "}
              {`${globalData.market_cap_percentage.btc.toFixed(1)}%`}
            </li>
            <li>
              ETH Dominance:{" "}
              {`${globalData.market_cap_percentage.eth.toFixed(1)}%`}
            </li>
          </>
        )}
      </ul>
      <nav>
        <ul>
          <li>Cryptospace</li>
          <li>Portfolio</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
