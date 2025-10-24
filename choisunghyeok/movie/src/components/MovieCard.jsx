import { useState } from "react";
import MovieChart from "./MovieChart";
import MovieDetail from "./MovieDetail";

function MovieCard({movie}) {
    const [showDetail, setShowDetail] = useState(false);

    const cleanTitle = movie.title.replace(/<[^>]*>?/g, "");

    const handleClick = () => setShowDetail(true);
    const handleClose = () => setShowDetail(false);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer"
        }}onClick={handleClick}
        >
        
        <img 
            src={movie.img || "https://via.placeholder.com/80x120?text=No+Image"} 
            alt="{cleanTitle}"
            style={{width: "80px", height: "120px", marginRight: "20px", objectFit: "cover", borderRadius: "4px"}} 
            />

            <div style={{flex: 1}}>
                <h3 style={{margin: "0 0 5px 0"}}>{cleanTitle}</h3>
                <p style={{margin: "0 0 10px 0"}}>감독: {movie.director || "정보 없음"}</p>
                <MovieChart data={[parseFloat(movie.userRating)]} labels={[cleanTitle]}/>
            </div>

            {showDetail && <MovieDetail movie={movie} onClose={handleClose} />}
        </div>
    );
}

export default MovieCard;