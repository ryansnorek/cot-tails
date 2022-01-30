import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues }) {
  const [analyzedReport] = useReportData(formValues);

  let reportDate = "";
  if (analyzedReport.length > 0) {
    reportDate = analyzedReport[0].date;
  }

  return (
    <div className="cot-report-wrapper">
      <div className="date">
        <h3>As of {reportDate}</h3>
      </div>
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
