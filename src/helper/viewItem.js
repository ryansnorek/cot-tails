export default function viewItem(search, deviation, item) {
    let view = true;
    const findSearchName = () => item.title.includes(search.toUpperCase());
    const findDeviation = () => {
      const { analysis } = item;
      for (let position in analysis) {
        let p = analysis[position];
        if (p.from_average) {
          const dev = parseFloat(p.from_average.slice(0, p.from_average.length - 2));
          if (dev > 0 && dev >= deviation) {
            return true
          } else if (dev < 0 && dev <= -deviation) {
            return true
          }
        }
      }
      return false;
    }
    if (search || deviation) {
      let searchName = true;
      let itemDeviation = true;
  
      if (search) {
        searchName = findSearchName();
      }
      if (deviation) {
        itemDeviation = findDeviation();
      }
      if (!searchName || !itemDeviation) {
        view = false;
      }
    }
    return view;
}