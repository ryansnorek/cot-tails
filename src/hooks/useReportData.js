import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";

export default function useReportData(year) {
  const [currentCotReport, setCurrentCotReport] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState([]);
  const [loadingMetrics, setLoadingMetrics] = useState(false);
  const [loadingReport, setLoadingReport] = useState(false);

  useEffect(function getMetrics() {
    console.log("EFFECT METRICS")
    if (historyMetrics.length === 0) {
      setLoadingMetrics(true);
      axios
        .get(`${BACKEND_URL}/api/cot/history/metrics/${year}`)
        .then((metrics) => {
          setHistoryMetrics(metrics.data);
        })
        .catch((err) => {
          console.log("ERROR =-=--=-=", err);
        });
    }
    return () => setLoadingMetrics(false);
  }, []);

  useEffect(function getCotReport() {
    console.log("EFFECT REPORT")

    if (currentCotReport.length === 0) {
      setLoadingReport(true);
      axios
        .get("/dea/newcot/FinFutWk.txt")
        .then((report) => {
          setCurrentCotReport(cleanReport(report.data));
        })
        .catch((err) => {
          console.log("ERROR =-=--=-=", err);
        });
    }
    return () => setLoadingReport(false);
  }, []);



  return [currentCotReport, historyMetrics, loadingMetrics, loadingReport];
}
