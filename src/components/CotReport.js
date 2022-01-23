import useCurrentCotReport from "../hooks/useCurrentCotReport";

function CotReport() {
  const report = useCurrentCotReport();
  console.log("-=-=-=-=-=-=-=",report);

  return <h1>CoT Report</h1>;
}

export default CotReport;
