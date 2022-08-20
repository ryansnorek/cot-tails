import { createContext, useContext, useState } from "react";
import useReportData from "../hooks/useReportData";

const initialFormValues = {
  year: "2021",
  deviation: 0,
  search: "",
};

const CotContext = createContext();

export const useCotContext = () => useContext(CotContext);

export function CotProvider({children}) {
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
    <CotContext.Provider
      value={{
        analyzedReport,
        reportDate,
        setReportDate,
        isLoading,
        setIsLoading,
        formValues,
        handleChange,
        scrolling,
        setScrolling,
      }}
    >
      {children}
    </CotContext.Provider>
  );
}
