import { useState } from "react";
import CotReport from "./CotReport";
import Header from "./Header";
import useReportData from "../hooks/useReportData";
import { cotReportContext, lifeCycleContext, formsContext } from "../contexts";

const initialFormValues = {
  year: "2021",
  deviation: 0,
  search: "",
};

function Home() {
  const [reportDate, setReportDate] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [analyzedReport, isLoading, setIsLoading] = useReportData(formValues);
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <cotReportContext.Provider
        value={{ analyzedReport, reportDate, setReportDate }}
      >
        <lifeCycleContext.Provider value={{ isLoading, setIsLoading }}>
          <formsContext.Provider
            value={{ formValues, handleChange, scrolling, setScrolling }}
          >
            <Header />
            <CotReport />
          </formsContext.Provider>
        </lifeCycleContext.Provider>
      </cotReportContext.Provider>
    </div>
  );
}

export default Home;
