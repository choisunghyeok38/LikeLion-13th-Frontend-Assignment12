import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MovieChart({data, labels}) {
    const charData = {
        labels: labels,
        datasets: [
            {
                label: "평점",
                data: data,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {position: "top"},
            title: {display: true, text: "영회 평점"},
        },
        scales: {
            y: {
                min: 0,
                max: 10,
            },
        },
    };

    return <Bar data={charData} options={options}/>;
}

export default MovieChart;