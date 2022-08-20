import { BACKEND_URL } from "../constants";
import axios from "axios";

const CotService = {
  currentReport: `${BACKEND_URL}/api/cot/report`,
  historyMetrics: (year) => `${BACKEND_URL}/api/cot/history/metrics/${year}`,
};

export const getCurrentReport = () => 
    axios.get(CotService.currentReport);         

export const getHistoryMetrics = (year) => 
    axios.get(CotService.historyMetrics(year));