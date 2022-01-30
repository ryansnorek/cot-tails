import getDeviation from "./getDeviation";
import { traderPositions } from "../constants";

class FullReport {
  constructor(title, date, analysis, weekChange) {
    this.title = title;
    this.date = date;
    this.analysis = analysis;
    this.weekChange = weekChange;
  }
}
class Analysis {
  constructor(
    current_report,
    average,
    median,
    max,
    min,
    from_average,
    from_median,
    from_max,
    from_min
  ) {
    this.current_report = current_report;
    this.average = average;
    this.median = median;
    this.max = max;
    this.min = min;
    this.from_average = from_average;
    this.from_median = from_median;
    this.from_max = from_max;
    this.from_min = from_min;
  }
}
class WeekChange {
  constructor(
    open_interest,
    asset_mgr_long,
    asset_mgr_short,
    lev_money_long,
    lev_money_short
  ) {
    this.open_interest = open_interest;
    this.asset_mgr_long = asset_mgr_long;
    this.asset_mgr_short = asset_mgr_short;
    this.lev_money_long = lev_money_long;
    this.lev_money_short = lev_money_short;
  }
}

export default function analyzeReport(cotReport, cotMetrics, deviation) {
  const analysisReport = [];
  cotReport.length > 1 &&
    cotReport.forEach((reportItem) => {
      const itemMetrics = cotMetrics.filter(
        (m) => reportItem.name === m.market_and_exchange_names
      );
      let analysis = {};
      traderPositions.forEach((position, i) => {
        analysis[position] = new Analysis(
          reportItem[position],
          itemMetrics[i].cot_mean,
          itemMetrics[i].cot_median,
          itemMetrics[i].cot_max,
          itemMetrics[i].cot_min,
          getDeviation(reportItem[position], itemMetrics[i].cot_mean),
          getDeviation(reportItem[position], itemMetrics[i].cot_median),
          getDeviation(reportItem[position], itemMetrics[i].cot_max),
          getDeviation(reportItem[position], itemMetrics[i].cot_min)
        );
      });
      const weeklyChanges = new WeekChange(
        reportItem.open_interest_change,
        reportItem.asset_mgr_long_change,
        reportItem.asset_mgr_short_change,
        reportItem.lev_money_long_change,
        reportItem.lev_money_short_change
      );
      analysisReport.push(
        new FullReport(
          reportItem.title,
          reportItem.date,
          analysis,
          weeklyChanges
        )
      );
    });
  return analysisReport;
}
