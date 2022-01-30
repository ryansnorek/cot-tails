import useReportData from "../hooks/useReportData";
import CotCard from "./CotCard";

function CotReport({ formValues }) {

  const [analyzedReport] = useReportData(formValues);

  // console.log(analyzedReport)

  return (
    <div className="cot-report-wrapper">
      <div className="date">
        {/* <h3>As of {analyzedReport[0].date}</h3> */}
      </div>
      <section>
        {analyzedReport.map((item) => {

            return (
              <CotCard key={item.title} item={item} formValues={formValues}/>
            );
          })}
      </section>
    </div>

  );
}

export default CotReport;
