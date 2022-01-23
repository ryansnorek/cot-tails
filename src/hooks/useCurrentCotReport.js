import axios from "axios";
import { useEffect, useState } from "react";
import cleanReport from "../helper/cleanReport";

export default function useCurrentCotReport() {
  const [currentCotReport, setCurrentCotReport] = useState({});

  useEffect(() => {
    axios
      .get("/dea/newcot/FinFutWk.txt")
      .then((report) => {
        setCurrentCotReport(cleanReport(report.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return currentCotReport;
}
