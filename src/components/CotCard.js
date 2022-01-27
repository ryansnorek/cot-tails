export default function CotCard({ item }) {
  const {
    open_interest,
    asset_mgr_long,
    asset_mgr_short,
    lev_money_long,
    lev_money_short,
    nonrept_positions_long,
    nonrept_positions_short,
  } = item.analysis;
  return (
    <div className="cot-card">
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
          <section className={open_interest.filter === false ? "filter" : ""}>
            <h4>Open Interest</h4>
            <p>{open_interest.current_report.toLocaleString()}</p>
            <p>{item.weekChange.open_interest.toLocaleString()}</p>
            <p>{open_interest.average.toLocaleString()}</p>
            <p>{open_interest.from_average.toLocaleString()}</p>
          </section>
          <section className={asset_mgr_long.filter === false ? "filter" : ""}>
            <h4>Asset Managers Long</h4>
            <p>{asset_mgr_long.current_report.toLocaleString()}</p>
            <p>{item.weekChange.asset_mgr_long.toLocaleString()}</p>
            <p>{asset_mgr_long.average.toLocaleString()}</p>
            <p>{asset_mgr_long.from_average.toLocaleString()}</p>
          </section>
          <section className={asset_mgr_short.filter === false ? "filter" : ""}>
            <h4>Asset Managers Short</h4>
            <p>{asset_mgr_short.current_report.toLocaleString()}</p>
            <p>{item.weekChange.asset_mgr_short.toLocaleString()}</p>
            <p>{asset_mgr_short.average.toLocaleString()}</p>
            <p>{asset_mgr_short.from_average.toLocaleString()}</p>
          </section>
          <section className={lev_money_long.filter === false ? "filter" : ""}>
            <h4>Leveraged Money Long</h4>
            <p>{lev_money_long.current_report.toLocaleString()}</p>
            <p>{item.weekChange.lev_money_long.toLocaleString()}</p>
            <p>{lev_money_long.average.toLocaleString()}</p>
            <p>{lev_money_long.from_average.toLocaleString()}</p>
          </section>
          <section className={lev_money_short.filter === false ? "filter" : ""}>
            <h4>Leveraged Money Short</h4>
            <p>{lev_money_short.current_report.toLocaleString()}</p>
            <p>{item.weekChange.lev_money_short.toLocaleString()}</p>
            <p>{lev_money_short.average.toLocaleString()}</p>
            <p>{lev_money_short.from_average.toLocaleString()}</p>
          </section>
          <section className={nonrept_positions_long.filter === false ? "filter" : ""}>
            <h4>Non Reportables Long</h4>
            <p>{nonrept_positions_long.current_report.toLocaleString()}</p>
            <p>{item.weekChange.nonrept_positions_long.toLocaleString()}</p>
            <p>{nonrept_positions_long.average.toLocaleString()}</p>
            <p>{nonrept_positions_long.from_average.toLocaleString()}</p>
          </section>
          <section className={nonrept_positions_short.filter === false ? "filter" : ""}>
            <h4>Non Reportables Short</h4>
            <p>{nonrept_positions_short.current_report.toLocaleString()}</p>
            <p>{item.weekChange.nonrept_positions_short.toLocaleString()}</p>
            <p>{nonrept_positions_short.average.toLocaleString()}</p>
            <p>{nonrept_positions_short.from_average.toLocaleString()}</p>
          </section>
          </div>
      </div>
    </div>
  );
}
