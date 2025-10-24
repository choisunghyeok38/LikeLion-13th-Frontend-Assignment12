import { useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;

  const handleSearch= async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const res = await axios.get("/api/v1/search/movie.json", {
        params: {query, display: 5},
        headers: {
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret,
        },
      });

      console.log(res.data);

      const items = res.data.items || [];
      if (items.length === 0) {
        setError("검색 결과가 없습니다.");
      } else {
        setMovies(items);
      }
    } catch(err) {
      console.error(err);
      setError("API 요청 중 오류가 발생했습니다.");
    } finally{
      setLoading(false);
    }
  };

  return (
    <div style={{padding: "20px", maxWidth: "800px", margin: "0 auto"}}>
      <Header onSearch={handleSearch}/>

      {loading && <p>검색 중입니다...</p>}
      {error && !loading && <p>{error}</p>}

      {!loading &&
        movies.length > 0 &&
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
    </div>
  );
}

export default App;