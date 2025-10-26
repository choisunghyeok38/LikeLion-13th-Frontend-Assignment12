import React, {useState} from "react";
import axios from "axios";
import TrendChart from "./components/TrendChart.jsx";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-10-25");
  const [timeUnit, setTimeUnit] = useState("month");
  const [keyword, setKeyword] = useState("");
  const [chartData, setChartData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/v1/datalab/shopping/categories",
        {
          startDate,
          endDate,
          timeUnit,
          category: [
            {
              name: keyword,
              param: ["50000000"]
            }
          ]
        },
        {
          headers: {
            "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_CLIENT_SECRET,
            "Content-Type": "application/json"
          }
        }
      );
      console.log(res.data);
      const labels = res.data.results[0].data.map(d => d.period);
      const data = res.data.results[0].data.map(d => d.ratio);
      setChartData({
        labels,
        datasets: [
          {
            label: keyword+ "검색 트렌드",
            data,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)"
          }
        ]
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1>쇼핑인사이트 검색 트렌드</h1>
      <form className="search-form" onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
        <input 
          type="date"
          value={startDate} 
          onChange={e => setStartDate(e.target.value)} 
        />
        <input 
          type="date"
          value={endDate} 
          onChange={e => setEndDate(e.target.value)} 
        />
        <select value={timeUnit} onChange={e => setTimeUnit(e.target.value)}>
          <option value="day">일간</option>
          <option value="week">주간</option>
          <option value="month">월간</option>
        </select>
        <input 
          type="text" 
          placeholder="키워드 입력" 
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />  
        <button type="submit">검색</button>      
      </form>
      {chartData ? <TrendChart data={chartData}/> : <p>차트를 보려면 검색하세요.</p> }
    </div>
  );
}

export default App;