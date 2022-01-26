import getDeviation from "./getDeviation";

export default function analyzeReport(cotReport, cotMetrics, formValues) {
  const { deviation } = formValues;

  const analysisReport = {};
  const traderPositions = ["open_interest", "asset_mgr_long", "asset_mgr_short", "lev_money_long", "lev_money_short"];

  console.log("REPORT __+_+=--==-=-=-=--=", cotReport);

  cotReport &&
    cotMetrics &&
    cotReport.map((item) => {
      const itemMetrics = cotMetrics.filter(
        (m) => item.name === m.market_and_exchange_names
      );
      let analysis = {};

      traderPositions.forEach((position) => {
        itemMetrics.forEach((metric) => {
          analysis[position] = {
            current_report: item[position],
            average: metric.cot_mean,
            median: metric.cot_median,
            max: metric.cot_max,
            min: metric.cot_min,
            from_average: getDeviation(item[position], metric.cot_mean),
            from_median: getDeviation(item[position], metric.cot_median),
            from_max: getDeviation(item[position], metric.cot_max),
            from_min: getDeviation(item[position], metric.cot_min),
          };
        });
      });
      analysisReport[item.name] = {
        title: item.title,
        date: item.date,
        analysis,
        weekChange: {
          open_interest: item.open_interest_change,
          asset_mgr_long: item.asset_mgr_long_change,
          asset_mgr_short: item.asset_mgr_short_change,
          lev_money_long: item.lev_money_long_change,
          lev_money_short: item.lev_money_short_change,
        },
      };
    });

  console.log(analysisReport);

  return {};
}
