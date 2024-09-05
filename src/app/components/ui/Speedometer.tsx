"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { DoughnutController } from "chart.js/auto";

interface SpeedometerProps {
  percentage: number;
  title: string;
}

const Speedometer: React.FC<SpeedometerProps> = ({ percentage, title }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    Chart.register(DoughnutController);

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Requested Service", "Offered Service @ 100%"],
          datasets: [
            {
              data: [percentage, 100 - percentage],
              backgroundColor: ["#a54a4a", "#B6B6B6"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: "80%",
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [percentage]);

  return (
    <main className="relative">
      <canvas ref={canvasRef} />
      <div className="flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bold">
          {percentage}%<div className="text-lg text-gray-600">{title}</div>
        </div>
      </div>
    </main>
  );
};

export default Speedometer;
