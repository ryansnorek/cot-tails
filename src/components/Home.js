import { useState } from "react";
import CotReport from "./CotReport";

const initialFormValues = {
  year: 2021,
  deviation: 200,
};

function Home() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    setFormValues({ [e.target.name]: e.target.value });
  };


  return (
    <div className="wrapper">
      <header className="top">
      <h1>Commitment of Traders</h1>
        {/* <div className="text">
                <p>Comparing averages from</p>
                <p>Deviation from average</p>
            </div> */}
        <div className="user-select">
          <label>
            Select year
            <select
              className="dropdown"
              value={formValues.year}
              onChange={handleChange}
            >
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
              <option value={2015}>2015</option>
              <option value={2014}>2014</option>
            </select>
          </label>
          <label>
            Deviation filter
            <select
              className="dropdown"
              value={formValues.deviation}
              onChange={handleChange}
            >
              <option value={200}>200%</option>
              <option value={150}>150%</option>
              <option value={125}>125%</option>
              <option value={100}>100%</option>
              <option value={75}>75%</option>
              <option value={50}>50%</option>
              <option value={25}>25%</option>
            </select>
          </label>
        </div>
      </header>
      <CotReport formValues={formValues}/>
    </div>
  );
}

export default Home;
