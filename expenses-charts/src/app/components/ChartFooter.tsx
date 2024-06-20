const ChartFooter = ({ total, delta }: { total: string; delta: string }) => {
  return (
    <div className="flex flex-row justify-between py-6">
      <div className="flex flex-col">
        <span className="text-slate-500">Total this month</span>
        <span className="text-black text-4xl font-semibold">{total}</span>
      </div>
      <div className="flex flex-col justify-end">
        <span className="text-black font-semibold text-end">{delta}</span>
        <span className="text-slate-500">from last month</span>
      </div>
    </div>
  );
};
export default ChartFooter;
