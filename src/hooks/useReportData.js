import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";

export default function useReportData(year) {
  const [currentCotReport, setCurrentCotReport] = useState({});
  const [historyMetrics, setHistoryMetrics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/dea/newcot/FinFutWk.txt")
        .then((report) => {
          setCurrentCotReport(cleanReport(report.data));
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get(`${BACKEND_URL}/api/cot/history/metrics/${year}`)
        .then((metrics) => {
          setHistoryMetrics(metrics.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return [currentCotReport, historyMetrics];
}
