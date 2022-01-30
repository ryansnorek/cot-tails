export default function highlightRow(reportDeviation, formValues) {
  const { deviation } = formValues;
  const dev = parseFloat(reportDeviation.slice(0, reportDeviation.length - 2));

  if (dev > 0 && dev >= deviation) {
    return true
  } else if (dev < 0 && dev <= -deviation) {
    return true
  }
  return false;
}
