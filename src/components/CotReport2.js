import { useEffect } from "react";
import CotCard from "./CotCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCotContext } from "../contexts";

function CotReport2() {
  const {
    analyzedReport,
    setReportDate,
    isLoading,
    setIsLoading,
    setScrolling,
  } = useCotContext();

  useEffect(() => {
    if (analyzedReport.length > 1) {
      setReportDate(analyzedReport[0].date);
      setIsLoading(false);
    }
  }, [analyzedReport, setReportDate, setIsLoading]);

  const handleScrollEffect = () => {
    const element = document.querySelector(".cot-report-wrapper");
    setScrolling(element.scrollTop > 33);
  };

  return (
    <div className="cot-report-wrapper" onScroll={handleScrollEffect}>
      <section className="report">
        {isLoading ? (
          <Skeleton count={6} containerClassName="skeleton" height={150} />
        ) : (
          analyzedReport.map((item, idx) => {
            return <CotCard key={idx} item={item} />;
          })
        )}
      </section>
    </div>
  );
}

export default CotReport2;