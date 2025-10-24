import { useState } from "react";

function Header({onSearch}) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query);
    };

    return (
        <header style={{textAlign: "center",marginBottom: "20px"}}>
            <h2>영화 검색</h2>
            <form onSubmit={handleSubmit} style={{marginTop: "10px"}}>
                <input 
                type="text"
                placeholder="영화 제목을 입력하세요"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                style={{
                    padding: "8px",
                    width: "60%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginRight:"10px",
                }}
            />
            <button 
                type="submit"
                style={{
                    padding: "8px 16px",
                    border: "none",
                    backgroundColor: "#ff4d6d",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>검색</button> 
            </form>
        </header>     
    );
}

export default Header;