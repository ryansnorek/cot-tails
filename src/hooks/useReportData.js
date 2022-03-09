import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";
import analyzeReport from "../helper/analyzeReport";

export default function useReportData(formValues) {
  const { year } = formValues;
  const [currentCotReport, setCurrentCotReport] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState([]);
  const [analyzedReport, setAnalyzedReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function getCotReport() {
    axios
      .get(`${BACKEND_URL}/api/cot/report`)
      .then((report) => {
        return cleanReport(report.data);
      })
      .then((cleanReport) => {
        setCurrentCotReport(cleanReport);
      })
      .catch((err) => {
        console.error("Error fetching report =-=--=-=", err);
      });
  }, []);

  useEffect(
    function getMetrics() {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/api/cot/history/metrics/${year}`)
        .then((metrics) => {
          setHistoryMetrics(metrics.data);
        })
        .catch((err) => {
          console.error("Error fetching history metrics =-=--=-=", err);
        })
    },
    [year]
  );

  const report = useMemo(() => {
    return analyzeReport(currentCotReport, historyMetrics);
  }, [currentCotReport, historyMetrics]);

  useEffect(
    function reportAnalysis() {
      if (currentCotReport.length > 1 && historyMetrics.length > 1) {
        setAnalyzedReport(report);
      }
    },
    [historyMetrics, currentCotReport, year, report]
  );

  return [analyzedReport, isLoading, setIsLoading];
}
