import getDeviation from "./getDeviation";

function markFilter(current, metric, deviation) {
  let dev = getDeviation(current, metric);
  dev = parseFloat(dev.slice(0, dev.length - 2));
  let filter = false;
  if (dev > 0 && dev >= deviation) {
    filter = true;
  } else if (dev < 0 && dev <= -deviation) {
    filter = true;
  }
  return filter;
}

export default function analyzeReport(cotReport, cotMetrics, deviation) {
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
  cotReport.length > 1 &&
    cotReport.forEach((reportItem) => {
      const itemMetrics = cotMetrics.filter(
        (m) => reportItem.name === m.market_and_exchange_names
      );
      let analysis = {};
      traderPositions.forEach((position, i) => {
        const filter = markFilter(
          reportItem[position],
          itemMetrics[i].cot_mean,
          deviation
        );
        analysis[position] = {
          filter,
          current_report: reportItem[position],
          average: itemMetrics[i].cot_mean,
          median: itemMetrics[i].cot_median,
          max: itemMetrics[i].cot_max,
          min: itemMetrics[i].cot_min,
          from_average: getDeviation(reportItem[position], itemMetrics[i].cot_mean),
          from_median: getDeviation(reportItem[position], itemMetrics[i].cot_median),
          from_max: getDeviation(reportItem[position], itemMetrics[i].cot_max),
          from_min: getDeviation(reportItem[position], itemMetrics[i].cot_min),
        };
      });
      analysisReport.push({
        title: reportItem.title,
        date: reportItem.date,
        analysis,
        weekChange: {
          open_interest: reportItem.open_interest_change,
          asset_mgr_long: reportItem.asset_mgr_long_change,
          asset_mgr_short: reportItem.asset_mgr_short_change,
          lev_money_long: reportItem.lev_money_long_change,
          lev_money_short: reportItem.lev_money_short_change,
          nonrept_positions_long: reportItem.nonrept_positions_long_change,
          nonrept_positions_short: reportItem.nonrept_positions_short_change,
        },
      });
    });
  return analysisReport;
}
