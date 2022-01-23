export default function cleanReport(report) {
    report = report.split("\n").map(row => row.split(","));
    const fields = ["Market_and_Exchange_Names","As_of_Date_In_Form_YYMMDD","Report_Date_as_YYYY-MM-DD","CFTC_Contract_Market_Code","CFTC_Market_Code","CFTC_Region_Code","CFTC_Commodity_Code","Open_Interest_All","Dealer_Positions_Long_All","Dealer_Positions_Short_All","Dealer_Positions_Spread_All","Asset_Mgr_Positions_Long_All","Asset_Mgr_Positions_Short_All","Asset_Mgr_Positions_Spread_All","Lev_Money_Positions_Long_All","Lev_Money_Positions_Short_All","Lev_Money_Positions_Spread_All","Other_Rept_Positions_Long_All","Other_Rept_Positions_Short_All","Other_Rept_Positions_Spread_All","Tot_Rept_Positions_Long_All","Tot_Rept_Positions_Short_All","NonRept_Positions_Long_All","NonRept_Positions_Short_All","Change_in_Open_Interest_All","Change_in_Dealer_Long_All","Change_in_Dealer_Short_All","Change_in_Dealer_Spread_All","Change_in_Asset_Mgr_Long_All","Change_in_Asset_Mgr_Short_All","Change_in_Asset_Mgr_Spread_All","Change_in_Lev_Money_Long_All","Change_in_Lev_Money_Short_All","Change_in_Lev_Money_Spread_All","Change_in_Other_Rept_Long_All","Change_in_Other_Rept_Short_All","Change_in_Other_Rept_Spread_All","Change_in_Tot_Rept_Long_All","Change_in_Tot_Rept_Short_All","Change_in_NonRept_Long_All","Change_in_NonRept_Short_All","Pct_of_Open_Interest_All","Pct_of_OI_Dealer_Long_All","Pct_of_OI_Dealer_Short_All","Pct_of_OI_Dealer_Spread_All","Pct_of_OI_Asset_Mgr_Long_All","Pct_of_OI_Asset_Mgr_Short_All","Pct_of_OI_Asset_Mgr_Spread_All","Pct_of_OI_Lev_Money_Long_All","Pct_of_OI_Lev_Money_Short_All","Pct_of_OI_Lev_Money_Spread_All","Pct_of_OI_Other_Rept_Long_All","Pct_of_OI_Other_Rept_Short_All","Pct_of_OI_Other_Rept_Spread_All","Pct_of_OI_Tot_Rept_Long_All","Pct_of_OI_Tot_Rept_Short_All","Pct_of_OI_NonRept_Long_All","Pct_of_OI_NonRept_Short_All","Traders_Tot_All","Traders_Dealer_Long_All","Traders_Dealer_Short_All","Traders_Dealer_Spread_All","Traders_Asset_Mgr_Long_All","Traders_Asset_Mgr_Short_All","Traders_Asset_Mgr_Spread_All","Traders_Lev_Money_Long_All","Traders_Lev_Money_Short_All","Traders_Lev_Money_Spread_All","Traders_Other_Rept_Long_All","Traders_Other_Rept_Short_All","Traders_Other_Rept_Spread_All","Traders_Tot_Rept_Long_All","Traders_Tot_Rept_Short_All","Conc_Gross_LE_4_TDR_Long_All","Conc_Gross_LE_4_TDR_Short_All","Conc_Gross_LE_8_TDR_Long_All","Conc_Gross_LE_8_TDR_Short_All","Conc_Net_LE_4_TDR_Long_All","Conc_Net_LE_4_TDR_Short_All","Conc_Net_LE_8_TDR_Long_All","Conc_Net_LE_8_TDR_Short_All","Contract_Units","CFTC_Contract_Market_Code_Quotes","CFTC_Market_Code_Quotes","CFTC_Commodity_Code_Quotes","CFTC_SubGroup_Code","FutOnly_or_Combined"];

    const cot = {};

    report.forEach((section, idx) => {
    const cotSection = {};
        section.forEach((el, i) => {
            cotSection[fields[i]] = el;
            cot[idx] = cotSection;
        })
    })
    const cleanCot = [];
    for (let key in cot) {
        const cleanCotObj = {};
        cleanCotObj['name'] = cot[key][fields[0]].replace('"','').replace('"','');
        cleanCotObj['title'] = cot[key][fields[0]].replace('"','').replace('CHICAGO','').replace('MERCANTILE','').replace('EXCHANGE','').replace('-','').replace('"','').replace('BOARD OF TRADE','').replace('x $5 -','').replace('-','').replace('-','');
        cleanCotObj['date'] = cot[key][fields[2]];
        cleanCotObj['code'] = cot[key][fields[3]];
        cleanCotObj['oi'] = Number(cot[key][fields[7]]);
        cleanCotObj['amLong'] = Number(cot[key][fields[11]]);
        cleanCotObj['amShort'] = Number(cot[key][fields[12]]);
        cleanCotObj['levLong'] = Number(cot[key][fields[14]]);
        cleanCotObj['levShort'] = Number(cot[key][fields[15]]);
        cleanCotObj['oiChange'] = Number(cot[key][fields[24]]);
        cleanCotObj['amLongChange'] = Number(cot[key][fields[28]]);
        cleanCotObj['amShortChange'] = Number(cot[key][fields[29]]);
        cleanCotObj['levLongChange'] = Number(cot[key][fields[31]]);
        cleanCotObj['levShortChange'] = Number(cot[key][fields[32]]);
        cleanCot.push(cleanCotObj);
    }
    cleanCot.pop();
    return cleanCot;
}