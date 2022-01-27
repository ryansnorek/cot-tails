import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues }) {

  const [analyzedReport] = useReportData(formValues.year);

  return (
    <div className="cot-report-wrapper">
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
