import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";
import analyzeReport from "../helper/analyzeReport";

export default function useReportData(year) {
  const [currentCotReport, setCurrentCotReport] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState([]);
  const [loadingMetrics, setLoadingMetrics] = useState(false);
  const [loadingReport, setLoadingReport] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzedReport, setAnalyzedReport] = useState([])

  useEffect(function reportAnalysis() {
    if (!loadingMetrics && !loadingReport && analyzedReport.length === 0) {
      // setIsAnalyzing(true);
      const report = analyzeReport(currentCotReport, historyMetrics);
      setAnalyzedReport(report);
    }
    return () => setIsAnalyzing(false);
  }, [historyMetrics, currentCotReport])

  useEffect(function getMetrics() {
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



  return [analyzedReport, loadingMetrics, loadingReport, isAnalyzing];
}
