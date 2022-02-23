import { useEffect } from "react";
import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CotReport({ formValues, setReportDate }) {
  const [analyzedReport] = useReportData(formValues);

  useEffect(() => {
    if (analyzedReport.length > 1) {
      setReportDate(analyzedReport[0].date);
    }
  }, [analyzedReport, setReportDate]);

  return (
    <div className="cot-report-wrapper">
      <section className="report">
        {analyzedReport.map((item) => {
          return (
            <CotCard key={item.title} item={item} formValues={formValues} />
          );
        }) || <Skeleton count={6} containerClassName="skeleton" height={150} />}
      </section>
    </div>
  );
}

export default CotReport;
