import analyzeReport from "../helper/analyzeReport";
import useReportData from "../hooks/useReportData";

function CotReport({ formValues }) {
  const [currentCotReport, historyMetrics] = useReportData(formValues.year);
  const analyzedReport = analyzeReport(
    currentCotReport,
    historyMetrics,
    formValues
  );

  return (
    <>
      <h1>CoT Report</h1>
    </>
  );
}

export default CotReport;
