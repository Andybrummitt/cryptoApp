import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import React, { useEffect, useRef, useState } from "react";

const CoinChart = ({ dayChartData, weekChartData, monthChartData }) => {
  const [timeFormat, setTimeFormat] = useState("1d");

  const dataTimeFormat = () => {
    switch (timeFormat) {
      case "1d":
        return dayChartData;
      case "7d":
        return weekChartData;
      case "30d":
        return monthChartData;
    }
  };

  const canvasRef = useRef(null);

  const config = {
    type: "line",
    data: {
      datasets: [
        {
          label: `${timeFormat} price ($)`,
          backgroundColor: "red",
          borderColor: "red",
          pointRadius: 0,
          data: dataTimeFormat(),
        },
      ],
    },
    options: {
      lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5,
      },
      responsive: true,
      maintainAspectRatio: false,
      adapters: {
        date: {
          locale: enUS,
        },
      },
      scales: {
        x: {
          type: "time",
        },
      },
    },
  };

  useEffect(() => {
    let chart;
    if (canvasRef && canvasRef.current && dayChartData && weekChartData && monthChartData) {
    const ctx = canvasRef.current.getContext("2d");
    chart = new Chart(ctx, config);
    }
    return () => {
        chart.destroy();
    }
  }, [timeFormat]);

  return (
    <div>
      <div className="btns-container">
        <button onClick={() => setTimeFormat("1d")}>Day</button>
        <button onClick={() => setTimeFormat("7d")}>Week</button>
        <button onClick={() => setTimeFormat("30d")}>Month</button>
      </div>
      <canvas
        ref={canvasRef}
        className="price-history-chart"
        width="400"
        height="400"
      ></canvas>
    </div>
  );
};

export default CoinChart;
