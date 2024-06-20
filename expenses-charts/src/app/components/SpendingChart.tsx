"use client";
import { useState } from "react";
import { BarChart, Bar, Cell, XAxis } from "recharts";
const SpendingBarChart = ({ data }: { data: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (_data: any, index: number) => {
    setActiveIndex(index);
  };
  const getWindowWidth = () => {
    if (typeof window === "undefined") return 600;
    return window.screen?.width;
  };

  return (
    <BarChart
      height={getWindowWidth() > 600 ? 400 : 300}
      width={getWindowWidth() > 600 ? 440 : 340}
      data={data}
    >
      <XAxis dataKey="day" />
      <Bar dataKey="amount" fill="#8884d8" onClick={handleClick}>
        {data.map((_entry: any, index: number) => (
          <Cell
            cursor="pointer"
            style={{ borderRadius: "10px" }}
            fill={index === activeIndex ? "#76b5bc" : "#ec775f"}
            key={`cell-${index}`}
          />
        ))}
      </Bar>
    </BarChart>
  );
};
export default SpendingBarChart;
