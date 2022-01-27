import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";
import analyzeReport from "../helper/analyzeReport";

export default function useReportData(formValues) {
  const [currentCotReport, setCurrentCotReport] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState([]);
  const [analyzedReport, setAnalyzedReport] = useState([]);

  useEffect(function getCotReport() {
    if (currentCotReport.length === 0) {
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
    }
  }, []);

  useEffect(function getMetrics() {
    if (historyMetrics.length === 0) {
      axios
        .get(`${BACKEND_URL}/api/cot/history/metrics/${formValues.year}`)
        .then((metrics) => {
          setHistoryMetrics(metrics.data);
        })
        .catch((err) => {
          console.error("Error fetching history metrics =-=--=-=", err);
        });
    }
  }, []);

  useEffect(
    function reportAnalysis() {
      if (
        currentCotReport.length > 1 &&
        historyMetrics.length > 1 &&
        analyzedReport.length === 0
      ) {
        const report = analyzeReport(currentCotReport, historyMetrics, formValues);
        setAnalyzedReport(report);
      }
    },
    [historyMetrics, currentCotReport]
  );

  return [analyzedReport];
}
