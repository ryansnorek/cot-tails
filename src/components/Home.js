import { useState } from "react";
import CotReport from "./CotReport";
import Header from "./Header";

const initialFormValues = {
  year: "2021",
  deviation: 0,
  search: "",
};

function Home() {
  const [reportDate, setReportDate] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="wrapper">
      <Header
        formValues={formValues}
        handleChange={handleChange}
        reportDate={reportDate}
        scrolling={scrolling}
      />
      <CotReport
        formValues={formValues}
        setReportDate={setReportDate}
        setScrolling={setScrolling}
      />
    </div>
  );
}

export default Home;
