import axios from "axios";
import { useEffect, useState } from "react"

const useChartData = api => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios.get(api)
            .then(results => setChartData(results.data))
            .catch(err => console.error(err));
    }, [api])
    return [chartData, setChartData];
}
export default useChartData;