import { useEffect, useState, useMemo } from "react";
import cleanReport from "../helper/cleanReport";
import { getCurrentReport, getHistoryMetrics } from "../services";
import analyzeReport from "../helper/analyzeReport";

export default function useReportData({ year }) {
  const [currentCotReport, setCurrentCotReport] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState([]);
  const [analyzedReport, setAnalyzedReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentReport()
      .then(({ data }) => cleanReport(data))
      .then((cleanedReport) => setCurrentCotReport(cleanedReport))
      .catch((err) => console.error("Error fetching report", err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getHistoryMetrics(year)
      .then(({ data }) => setHistoryMetrics(data))
      .catch((err) => console.error("Error fetching history metrics", err));
  }, [year]);

  const report = useMemo(() => {
    return analyzeReport(currentCotReport, historyMetrics);
  }, [currentCotReport, historyMetrics]);

  useEffect(() => {
    setAnalyzedReport(report || "loading data");
  }, [historyMetrics, currentCotReport, year, report]);

  return [analyzedReport, isLoading, setIsLoading];
}
