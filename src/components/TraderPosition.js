export default function TraderPosition({ item, title, trader, formValues }) {
  const { analysis, weekChange } = item;
  const { current_report, average, from_average } = analysis[`${trader}`];
  const { deviation } = formValues;

  let highlight = false;
  const dev = parseFloat(from_average.slice(0, from_average.length - 2));

  if (dev > 0 && dev >= deviation) {
    highlight = true;
  } else if (dev < 0 && dev <= -deviation) {
    highlight = true;
  }
  

  return (
    <section className={highlight ? "highlight" : ""}>
      <h4>{title}</h4>
      <p>{current_report.toLocaleString()}</p>
      <p>{weekChange[`${trader}`].toLocaleString()}</p>
      <p>{average.toLocaleString()}</p>
      <p>{from_average.toLocaleString()}</p>
    </section>
  );
}
