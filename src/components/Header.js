import { useCotContext } from "../contexts";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectYear(props) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="year-label">Comparing Year</InputLabel>
      <Select
        labelId="year-label"
        value={props.value}
        label="Year"
        name="year"
        onChange={props.handleChange}
      >
        <MenuItem value={2021}>2021</MenuItem>
        <MenuItem value={2020}>2020</MenuItem>
        <MenuItem value={2019}>2019</MenuItem>
        <MenuItem value={2018}>2018</MenuItem>
        <MenuItem value={2017}>2017</MenuItem>
        <MenuItem value={2016}>2016</MenuItem>
        <MenuItem value={2015}>2015</MenuItem>
        <MenuItem value={2014}>2014</MenuItem>
      </Select>
    </FormControl>
  );
}

function SelectDeviation(props) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="deviation-label">Deviation</InputLabel>
        <Select
          labelId="deviation-label"
          value={props.value}
          label="Deviation"
          name="deviation"
          onChange={props.handleChange}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={200}>200%</MenuItem>
          <MenuItem value={150}>150%</MenuItem>
          <MenuItem value={125}>125%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
          <MenuItem value={75}>75%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={25}>25%</MenuItem>
        </Select>
      </FormControl>
    );
  }

export default function Header() {
  const { reportDate, formValues, handleChange, scrolling } = useCotContext();

  return (
    <header className={`top ${scrolling && "scroll-shadow"}`}>
      <div className="filters">
        <div className="title">
          <img className="logo" src="../../logo.png" alt="logo" />
          <div className="inner">
            <h1>CoT-tails</h1>
            <p className="date">{reportDate && `as of ${reportDate}`}</p>
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
          <SelectYear value={formValues.year} handleChange={handleChange} />
          <SelectDeviation value={formValues.deviation} handleChange={handleChange} />
        </div>
      </div>
    </header>
  );
}
