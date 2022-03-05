export default function Header({ formValues, handleChange, reportDate }) {
  return (
    <header className="top">
      <div className="filters">
      <div className="title">
        <img className="logo" src="../../logo.png" alt="logo" />
        <h1>CoT-tails</h1>
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
            Comparing year
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
            Deviation filter
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
        {/* <div className="date">
        <h3>Financial Futures as of {reportDate}</h3>
      </div> */}
    </header>
  );
}
