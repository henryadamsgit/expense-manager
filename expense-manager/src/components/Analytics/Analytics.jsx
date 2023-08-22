// import React, { useRef, useEffect } from "react";
// import { Chart } from "chart.js";
// import "./Analytics.scss";

// const Analytics = ({ expenses }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (expenses.length === 0) {
//       return;
//     }

//     const myChart = new Chart(canvasRef.current, {
//       type: 'bar',
//       data: {
//         labels: expenses.map((expense) => expense.transaction_date),
//         datasets: [
//           {
//             label: "Transaction Price",
//             data: expenses.map((expense) => expense.price),
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             borderColor: "rgba(75, 192, 192, 1)",
//             borderWidth: 1,
//           },
//         ],
//       },
//     });

//     return () => {
//       myChart.destroy();
//     };
//   }, [expenses]);

//   return <canvas className="analytics" ref={canvasRef} />;
// };

// export default Analytics;

import React from "react";
import "./Analytics.scss";
import BarChart from "../BarChart/BarChart";

const Analytics = ({ barData }) => {
  return (
    <div className="analytics">
      Analytics
      <BarChart barData={barData} />
    </div>
  );
};

export default Analytics;
