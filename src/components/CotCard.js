export default function CotCard({ item }) {
  return (
    <div className="cot-card">
      <header>
        <h3>{item.title}</h3>
      </header>
      <div className="report-analysis">
          <section>
            <h3>Trader Position</h3>
            <h3>Current report</h3>
            <h3>Week change</h3>
            <h3>Average position</h3>
            <h3>Deviation</h3>
          </section>
          <section>
            <h4>Open Interest</h4>
            <p>{item.analysis.open_interest.current_report.toLocaleString()}</p>
            <p>{item.weekChange.open_interest.toLocaleString()}</p>
            <p>{item.analysis.open_interest.average.toLocaleString()}</p>
            <p>{item.analysis.open_interest.from_average.toLocaleString()}</p>
          </section>
          <section>
            <h4>Asset Managers Long</h4>
            <p>{item.analysis.asset_mgr_long.current_report.toLocaleString()}</p>
            <p>{item.weekChange.asset_mgr_long.toLocaleString()}</p>
            <p>{item.analysis.asset_mgr_long.average.toLocaleString()}</p>
            <p>{item.analysis.asset_mgr_long.from_average.toLocaleString()}</p>
          </section>
          <section>
            <h4>Asset Managers Short</h4>
            <p>{item.analysis.asset_mgr_short.current_report.toLocaleString()}</p>
            <p>{item.weekChange.asset_mgr_short.toLocaleString()}</p>
            <p>{item.analysis.asset_mgr_short.average.toLocaleString()}</p>
            <p>{item.analysis.asset_mgr_short.from_average.toLocaleString()}</p>
          </section>
          <section>
            <h4>Leveraged Money Long</h4>
            <p>{item.analysis.lev_money_long.current_report.toLocaleString()}</p>
            <p>{item.weekChange.lev_money_long.toLocaleString()}</p>
            <p>{item.analysis.lev_money_long.average.toLocaleString()}</p>
            <p>{item.analysis.lev_money_long.from_average.toLocaleString()}</p>
          </section>
          <section>
            <h4>Leveraged Money Short</h4>
            <p>{item.analysis.lev_money_short.current_report.toLocaleString()}</p>
            <p>{item.weekChange.lev_money_short.toLocaleString()}</p>
            <p>{item.analysis.lev_money_short.average.toLocaleString()}</p>
            <p>{item.analysis.lev_money_short.from_average.toLocaleString()}</p>
          </section>
      </div>
    </div>
  );
}
