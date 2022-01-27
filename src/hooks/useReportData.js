import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";

export default function useReportData(year) {
  const [currentCotReport, setCurrentCotReport] = useState({});
  const [historyMetrics, setHistoryMetrics] = useState([]);


  useEffect(() => {
    function fetchHistoryMetrics() {
      axios
        .get(`${BACKEND_URL}/api/cot/history/metrics/${year}`)
        .then((metrics) => {
          setHistoryMetrics(metrics.data);
        })
        .catch((err) => {
          console.log("ERROR =-=--=-=",err);
        });
    }
    function fetchCotReport() {
      axios
        .get("/dea/newcot/FinFutWk.txt")
        .then((report) => {
          setCurrentCotReport(cleanReport(report.data));
        })
        .then(() => {
          fetchHistoryMetrics()
        })
        .catch((err) => {
          console.log("ERROR =-=--=-=",err);
        });
    }
    fetchCotReport();
  },[])

  return [currentCotReport, historyMetrics];
}
