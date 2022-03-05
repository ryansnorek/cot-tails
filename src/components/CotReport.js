import { useEffect } from "react";
import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CotReport({ formValues, setReportDate, setScrolling }) {
  const [analyzedReport] = useReportData(formValues);

  useEffect(() => {
    if (analyzedReport.length > 1) {
      setReportDate(analyzedReport[0].date);
    }
  }, [analyzedReport, setReportDate]);

  const handleScrollEffect = () => {
    const element = document.querySelector(".cot-report-wrapper");
    setScrolling(element.scrollTop > 33)
  }

  return (
    <div className="cot-report-wrapper" onScroll={handleScrollEffect}>
      <section className="report">
        {analyzedReport.length < 1 ? (
          <Skeleton count={6} containerClassName="skeleton" height={150} />
        ) : (
          analyzedReport.map((item, idx) => {
            return (
              <CotCard key={idx} item={item} formValues={formValues} />
            );
          })
        )}
      </section>
    </div>
  );
}

export default CotReport;
