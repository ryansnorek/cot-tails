import TraderPosition from "./TraderPosition";

export default function CotCard({ item, formValues }) {
  const { search } = formValues;
  const view = item.title.includes(search.toUpperCase()) || false;

  return (
    <div className={`cot-card ${view ? "" : "hide"}`}>
      <header>
        <h2>{item.title}</h2>
      </header>
      <div className="report-analysis">
        <section className="titles">
          <h3>Trader Position</h3>
          <h3>Current report</h3>
          <h3>Week change</h3>
          <h3>Average position</h3>
          <h3>Deviation</h3>
        </section>
        <div className="report-data">
          <TraderPosition
            item={item}
            title={"Open Interest"}
            trader={"open_interest"}
            formValues={formValues}
          />
          <TraderPosition
            item={item}
            title={"Asset Managers Long"}
            trader={"asset_mgr_long"}
            formValues={formValues}
          />
          <TraderPosition
            item={item}
            title={"Asset Managers Short"}
            trader={"asset_mgr_short"}
            formValues={formValues}
          />
          <TraderPosition
            item={item}
            title={"Leveraged Money Long"}
            trader={"lev_money_long"}
            formValues={formValues}
          />
          <TraderPosition
            item={item}
            title={"Leveraged Money Short"}
            trader={"lev_money_short"}
            formValues={formValues}
          />
        </div>
      </div>
    </div>
  );
}
