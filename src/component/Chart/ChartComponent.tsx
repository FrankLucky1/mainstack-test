import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions, Transaction } from "../../types/responseTypes";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);
type Props = {
  transactions: Transaction[];
};

const ChartComponent = ({ transactions }: Props) => {
  const data = {
    datasets: [
      {
        label: "Revenue",
        data: transactions.map((t) => ({ x: t.date, y: t.amount })),
        borderColor: "#FF5403",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        borderWidth: 1,
        fill: true,
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Monthly Revenue Trend",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          callback: function (
            _value: string | number,
            index: number,
            ticks: { value: number }[]
          ): string {
            if (index === 0) return "Apr 1, 2022";
            if (index === ticks.length - 1) return "Apr 30, 2022";
            return "";
          },
        },
      },
      y: {
        display: false,
        grace: "10%",
      },
    },
  };

  return <Line data={data} options={options} width={765} />;
};

export default ChartComponent;

