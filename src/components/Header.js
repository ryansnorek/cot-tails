import { useState } from "react";

export default function Header({
  formValues,
  handleChange,
  reportDate,
  scrolling,
}) {
  const [hide, setHide] = useState(true);
  const handleClick = () => {
    setHide(!hide);
  };
  return (
    <header className={`top ${scrolling && "scroll-shadow"}`}>
      <div className="filters">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" onClick={handleClick} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" className={!hide && "show"}>
              <a href="#">
                <li>CoT Report</li>
              </a>
              <a href="#">
                <li>Stonks</li>
              </a>
              <a href="#">
                <li>Info</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </nav>
        <div className="title">
          <img className="logo" src="../../logo.png" alt="logo" />
          <div className="inner">
            <h1>CoT-tails</h1>
            <p className="date">as of {reportDate}</p>
          </div>
        </div>
        <input
          className="search-bar"
          type="search"
          name="search"
          placeholder="Search assets"
          value={formValues.search}
          onChange={handleChange}
        />
        <div className="user-select">
          <label>
            Comparing
            <select
              name="year"
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
            Filtering
            <select
              name="deviation"
              className="dropdown"
              value={formValues.deviation}
              onChange={handleChange}
            >
              <option value={0}>None</option>
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
      </div>
    </header>
  );
}
