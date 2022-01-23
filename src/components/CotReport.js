import axios from "axios";
import { useEffect } from "react";

function CotReport() {

    useEffect(() => {
        axios.get("/dea/newcot/FinFutWk.txt")
        .then((report) => {
            console.log(report.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <h1>Report</h1>
    )
}

export default CotReport;