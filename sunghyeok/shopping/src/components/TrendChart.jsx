import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend  
);

export default function TrendChart({data}) {
    const options = {
        Response: true,
        plugins: {
            legend: {position: "top"},
            title: {display: true, text: "검색 트렌드 차트"},
        },
    };

    return <Line options={options} data={data}/>; 
}