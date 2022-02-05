import TraderPosition from "./TraderPosition";
import { traderPositions, titles } from "../constants";
import viewItem from "../helper/viewItem";

export default function CotCard({ item, formValues }) {
  const { search, deviation } = formValues;
  const toggleView = viewItem(search, deviation, item);

  return (
    <div className={`cot-card ${!toggleView && "hide"}`}>
      <header>
        <h2>{item.title}</h2>
      </header>
      <div className="report-analysis">
        <section className="titles">
          <h3>Trader Position</h3>
          <h3>Current report</h3>
          <h3>Week change</h3>
          <h3>{formValues.year} average</h3>
          <h3>Deviation from average</h3>
        </section>
        <div className="report-data">
          {traderPositions.map((trader, idx) => {
            return (
              <TraderPosition 
                item={item}
                title={titles[idx]}
                trader={trader}
                formValues={formValues}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
