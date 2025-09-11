import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") || "";
    const [input, setInput] = useState("");

    const handleSearch = () => {
        setSearchParams({ name: input });
    };

    return (
        <div >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập từ khóa tìm kiếm"
            />
            <button style={{ backgroundColor: "blue" }} onClick={handleSearch}>Tìm kiếm</button>
            <div>{name}</div>
        </div>
    );
}
