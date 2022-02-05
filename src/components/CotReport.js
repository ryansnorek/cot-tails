import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";
import ProgressBar from "./ProgressBar";

function CotReport({ formValues }) {
  const [analyzedReport] = useReportData(formValues);

  let reportDate = "";
  if (analyzedReport.length > 0) {
    reportDate = analyzedReport[0].date;
  }

  if (!analyzedReport.length > 1) {
    return <ProgressBar bgcolor="#99ccff" progress='95'  height={30} />
  }
  return (
    <div className="cot-report-wrapper">
      <div className="date">
        <h3>As of {reportDate}</h3>
      </div>
      <section>
        {analyzedReport.map((item) => {
          return (
            <CotCard 
              key={item.title} 
              item={item} 
              formValues={formValues} 
            />
          );
        })}
      </section>
    </div>
  );
}

export default CotReport;
