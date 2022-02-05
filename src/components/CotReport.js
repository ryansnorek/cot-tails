import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues, setReportDate }) {
  const [analyzedReport] = useReportData(formValues);

    if (analyzedReport.length > 0) {
      setReportDate(analyzedReport[0].date);
    }

  if (!analyzedReport.length > 1) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="cot-report-wrapper">
      <section>
        {analyzedReport.map((item) => {
          return (
            <CotCard key={item.title} item={item} formValues={formValues} />
          );
        })}
      </section>
    </div>
  );
}

export default CotReport;
