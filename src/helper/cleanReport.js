import { fields } from "../constants";
export default function cleanReport(report) {
  report = report.split("\n").map((row) => row.split(","));
  const cot = {};
  report.forEach((section, idx) => {
    const cotSection = {};
    section.forEach((el, i) => {
      cotSection[fields[i]] = el;
      cot[idx] = cotSection;
    });
  });
  const cleanCot = [];
  for (let key in cot) {
    const cleanCotObj = {};
    cleanCotObj["name"] = cot[key][fields[0]].replace('"', "").replace('"', "");
    cleanCotObj["title"] = cot[key][fields[0]]
      .replace('"', "")
      .replace("CHICAGO", "")
      .replace("MERCANTILE", "")
      .replace("EXCHANGE", "")
      .replace("-", "")
      .replace('"', "")
      .replace("BOARD OF TRADE", "")
      .replace("x $5 -", "")
      .replace("-", "")
      .replace("-", "");
    cleanCotObj["date"] = cot[key][fields[2]];
    cleanCotObj["code"] = cot[key][fields[3]];
    cleanCotObj["open_interest"] = Number(cot[key][fields[7]]);
    cleanCotObj["asset_mgr_long"] = Number(cot[key][fields[11]]);
    cleanCotObj["asset_mgr_short"] = Number(cot[key][fields[12]]);
    cleanCotObj["lev_money_long"] = Number(cot[key][fields[14]]);
    cleanCotObj["lev_money_short"] = Number(cot[key][fields[15]]);
    cleanCotObj["nonrept_positions_long"] = Number(cot[key][fields[22]]);
    cleanCotObj["nonrept_positions_short"] = Number(cot[key][fields[23]]);
    cleanCotObj["open_interest_change"] = Number(cot[key][fields[24]]);
    cleanCotObj["asset_mgr_long_change"] = Number(cot[key][fields[28]]);
    cleanCotObj["asset_mgr_short_change"] = Number(cot[key][fields[29]]);
    cleanCotObj["lev_money_long_change"] = Number(cot[key][fields[31]]);
    cleanCotObj["lev_money_short_change"] = Number(cot[key][fields[32]]);
    cleanCot.push(cleanCotObj);
  }
  cleanCot.pop();
  return cleanCot;
}

