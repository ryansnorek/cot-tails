import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";
import { BACKEND_URL } from "../constants";
import analyzeReport from "../helper/analyzeReport";

export default function useReportData(formValues) {
  const { year } = formValues;
  const [currentCotReport, setCurrentCotReport] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState([]);
  const [analyzedReport, setAnalyzedReport] = useState([]);

  console.log(formValues)
  useEffect(
    function getCotReport() {
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

  useEffect(
    function getMetrics() {
    console.log("METRICS EFFECT")
    console.log(year)
      axios
        .get(`${BACKEND_URL}/api/cot/history/metrics/${year}`)
        .then((metrics) => {
          setHistoryMetrics(metrics.data);
        })
        .catch((err) => {
          console.error("Error fetching history metrics =-=--=-=", err);
        });
  }, [year]);

  useEffect(
    function reportAnalysis() {
      if (
        currentCotReport.length > 1 &&
        historyMetrics.length > 1 
      ) {
        const report = analyzeReport(currentCotReport, historyMetrics);
        setAnalyzedReport(report);
      }
    },
    [historyMetrics, currentCotReport, year]
  );

  return [analyzedReport];
}
