export default function getDeviation(reportValue, metricsValue) {
  const percentChange = (reportValue, metricsValue) => {
    if (reportValue === 0) {
      return -100 + "% ";
    } else if (metricsValue === 0) {
      return 100 + "% ";
    }
    const change = (((reportValue - metricsValue) / metricsValue) * 100).toFixed(2);
    return change.toLocaleString() + "% ";
  };
  return percentChange(reportValue, metricsValue);
}
