import analyzeReport from "../helper/analyzeReport";
import useReportData from "../hooks/useReportData";

function CotReport({ formValues }) {
  const [currentCotReport, historyMetrics] = useReportData(formValues.year);

  const [analyzedReport] = analyzeReport(
    currentCotReport,
    historyMetrics,
    formValues
  );

  console.log(analyzedReport);
  return (
    <>
      <h1>CoT Report</h1>
      {analyzedReport &&
        analyzedReport.map((item) => {
          return (
            <>
              <h3>{item.title}</h3>
              <p>
                Asset Manager Long:{" "}
                {item.analysis.asset_mgr_long.current_report}
              </p>
              <p>
                Asset Manager Short:{" "}
                {item.analysis.asset_mgr_short.current_report}
              </p>
              <p>
                Hedge Funds Long:{" "}
                {item.analysis.lev_money_long.current_report}
              </p>
              <p>
                Hedge Funds Short:{" "}
                {item.analysis.lev_money_short.current_report}
              </p>
            </>
          );
        })}
    </>
  );
}

export default CotReport;
