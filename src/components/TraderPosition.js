import highlightRow from "../helper/highlightRow";

export default function TraderPosition({ item, title, trader, formValues }) {
  const { analysis, weekChange } = item;
  const { current_report, average, from_average } = analysis[`${trader}`];
  let highlight = false;
  if (from_average && formValues.deviation > 0) {
    highlight = highlightRow(from_average, formValues);
  }
  return (
    <section className={highlight && "highlight"}>
      <p>{title}</p>
      <p>{current_report.toLocaleString()}</p>
      <p>{weekChange[`${trader}`].toLocaleString()}</p>
      <p>{average ? average.toLocaleString() : "unavailable"}</p>
      <p>{from_average ? from_average.toLocaleString() : "unavailable"}</p>
    </section>
  );
}
