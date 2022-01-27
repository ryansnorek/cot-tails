import getDeviation from "./getDeviation";

export default function analyzeReport(cotReport, cotMetrics, formValues) {
  const analysisReport = [];
  const traderPositions = [
    "open_interest",
    "asset_mgr_long",
    "asset_mgr_short",
    "lev_money_long",
    "lev_money_short",
    "nonrept_positions_long",
    "nonrept_positions_short",
  ];
  cotReport.length > 1 && cotReport.forEach((item) => {
    const itemMetrics = cotMetrics.filter(
      (m) => item.name === m.market_and_exchange_names
    );
    let analysis = {};
    traderPositions.forEach((position, i) => {
        analysis[position] = {
          current_report: item[position],
          average: itemMetrics[i].cot_mean,
          median: itemMetrics[i].cot_median,
          max: itemMetrics[i].cot_max,
          min: itemMetrics[i].cot_min,
          from_average: getDeviation(item[position], itemMetrics[i].cot_mean),
          from_median: getDeviation(item[position], itemMetrics[i].cot_median),
          from_max: getDeviation(item[position], itemMetrics[i].cot_max),
          from_min: getDeviation(item[position], itemMetrics[i].cot_min),
        };
    });
    analysisReport.push({
      title: item.title,
      date: item.date,
      analysis,
      weekChange: {
        open_interest: item.open_interest_change,
        asset_mgr_long: item.asset_mgr_long_change,
        asset_mgr_short: item.asset_mgr_short_change,
        lev_money_long: item.lev_money_long_change,
        lev_money_short: item.lev_money_short_change,
        nonrept_positions_long: item.nonrept_positions_long_change,
        nonrept_positions_short: item.nonrept_positions_short_change,
      },
    });
  });
  return analysisReport;
}
