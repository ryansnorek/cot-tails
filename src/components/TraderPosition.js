export default function TraderPosition({ item, title, trader }) {
  const { analysis, weekChange } = item;
  const { filter, current_report, average, from_average } =
    analysis[`${trader}`];
    
  return (
    <section className={filter ? "filter" : ""}>
      <h4>{title}</h4>
      <p>{current_report.toLocaleString()}</p>
      <p>{weekChange[`${trader}`].toLocaleString()}</p>
      <p>{average.toLocaleString()}</p>
      <p>{from_average.toLocaleString()}</p>
    </section>
  );
}
