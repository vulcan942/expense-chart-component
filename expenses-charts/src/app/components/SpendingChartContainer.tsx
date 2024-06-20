import ChartFooter from "./ChartFooter";
import SpendingChart from "./SpendingChart";
const SpendingChartContainer = (props: any) => {
  const { data, total, delta } = props;

  return (
    <div className="flex flex-row justify-between lg:w-[500px] min-[400px]:w-[380px] h-auto p-6 rounded-2xl bg-[#fffaf5]">
      <div className="flex flex-col">
        <span className="text-2xl font-semibold">Spending - Last 7 days</span>
        <SpendingChart data={data} />
        <div className="border-2 border-slate-100 h-[1px]"></div>
        <ChartFooter total={total} delta={delta} />
      </div>
    </div>
  );
};
export default SpendingChartContainer;
