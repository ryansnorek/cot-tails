import analyzeReport from "../helper/analyzeReport";
import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues }) {
  const [currentCotReport, historyMetrics, loadingMetrics, loadingReport] = useReportData(formValues.year);

  const [analyzedReport] = analyzeReport(
    currentCotReport,
    historyMetrics,
    formValues
  );

  if (loadingMetrics || loadingReport) {
    return <h1>Loading</h1>
  }

  console.log(analyzedReport);
  return (
    <div className="cot-report-wrapper">
      <header>
        <h1>Commitment of Traders</h1>
        {/* <p>As of: {releaseDate}</p> */}
      </header>
      <section>
        {analyzedReport.map((item) => {
            return (
              <CotCard item={item}/>
            );
          })}
      </section>
    </div>

  );
}

export default CotReport;
