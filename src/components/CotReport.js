import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues }) {
  const [analyzedReport, loadingMetrics, loadingReport, setIsAnalyzing] = useReportData(formValues.year);
  
  if (loadingMetrics || loadingReport) {
    return <h1>Loading</h1>
  }

  console.log(analyzedReport)
  return (
    <div className="cot-report-wrapper">
      {/* <header>
        <h1>Commitment of Traders</h1>
      </header> */}
      <section>
        {analyzedReport.map((item) => {
            return (
              <CotCard key={item.title} item={item}/>
            );
          })}
      </section>
    </div>

  );
}

export default CotReport;
