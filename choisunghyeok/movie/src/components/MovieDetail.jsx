import MovieChart from "./MovieChart"; 

function MovieDetail({movie, onClose}) {
    const cleanTitle = movie.title.replace(/<[^>]*>?/g, "");

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                width: "500px",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative"
            }}>
                <button
                    onClick={onClose}
                    style={{position: "absolute", top: "10px", right: "10px"}}
                    >
                        X
                    </button>
                    <div style={{display: "flex", marginBottom: "20px"}}>
                        <img 
                            src={movie.image || "https://via.placeholder.com/100x150?text=No+Image"} 
                            alt={cleanTitle}
                            style={{width: "100px", height: "150px", objectFit: "cover", borderRadius: "4px", marginRight: "20px"}} 
                        />
                        <div>
                            <h2>{cleanTitle}</h2>
                            <p>감독: {movie.director || "정보 없음"}</p>
                            <p>개봉연도: {movie.pubDate || "정보 없음"}</p>
                            <p>출연: {movie.actor || "정보 없음"}</p>
                        </div>
                    </div>

                    <MovieChart 
                        data={[parseFloat(movie.userRating)]}
                        labels={[cleanTitle]}
                    />
            </div>
        </div>
    );
}

export default MovieDetail;