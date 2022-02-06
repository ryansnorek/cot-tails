import { useEffect } from "react";
import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues, setReportDate }) {
  const [analyzedReport] = useReportData(formValues);

  useEffect(() => {
    if (analyzedReport.length > 1) {
      setReportDate(analyzedReport[0].date);
    }
  }, [analyzedReport, setReportDate]);

  if (!(analyzedReport.length > 1)) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="cot-report-wrapper">
        <section className="report">
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
