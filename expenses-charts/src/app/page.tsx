import Header from "./components/Header";
import SpendingChartContainer from "./components/SpendingChartContainer";

export default async function Home() {
  const data = await Promise.resolve([
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <Header balance="$921.48" />
      <SpendingChartContainer data={data} total="$227.94" delta="+12.45%" />
    </main>
  );
}
