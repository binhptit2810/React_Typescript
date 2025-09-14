// import { Link } from "react-router-dom"

// export const products = [
//     {
//         id: 1,
//         name: "Laptop Dell XPS 13",
//         price: "35,000,000 VND",
//         description: "Laptop cao cấp với thiết kế mỏng nhẹ.",
//     },
//     {
//         id: 2,
//         name: "iPhone 14 Pro",
//         price: "30,000,000 VND",
//         description: "Điện thoại cao cấp của Apple với màn hình Super Retina XDR. ",
//     },
//     {
//         id: 3,
//         name: "Samsung Galaxy S22",
//         price: "25,000,000 VND",
//         description: "Flagship của Samsung với thiết kế sang trọng, camera đêm siêu nét.",

//     },
//     {
//         id: 4,
//         name: "Tai nghe Sony WH-1000XM4",
//         price: "7,000,000 VND",
//         description: "Trang bị bộ xử lý chống ồn QN1 giúp loại bỏ tạp âm từ môi trường xung quanh ",

//     },
//     {
//         id: 5,
//         name: "Apple Watch Series 8",
//         price: "12,000,000 VND",
//         description: "Apple Watch Series 8 được trang bị con quay hồi chuyển 3 trục mới và gia tốc kế lực cao.",
//     }
// ]

// export default function ProductList() {
//     return (
//         <div>
//             <h2>Danh sách sản phẩm</h2>
//             <div style={{ display: "flex", gap: 30, }}>
//                 {products.map(product => (<div key={product.id} style={{ marginBottom: "15px", border: "1px solid black", boxShadow: "2px 2px 10px black " }}>
//                     <h3>{product.name}</h3>
//                     <p>Giá: {product.price}</p>
//                     <p>{product.description}</p>
//                     <Link to={`/products/${product.id}`}>Xem chi tiết</Link> </div>
//                 ))} </div>
//         </div>
//     )
// }

import { Link, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

export const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 13",
        price: "35,000,000 VND",
        description: "Laptop cao cấp với thiết kế mỏng nhẹ.",
    },
    {
        id: 2,
        name: "iPhone 14 Pro",
        price: "30,000,000 VND",
        description: "Điện thoại cao cấp của Apple với màn hình Super Retina XDR.",
    },
    {
        id: 3,
        name: "Samsung Galaxy S22",
        price: "25,000,000 VND",
        description: "Flagship của Samsung với thiết kế sang trọng, camera đêm siêu nét.",
    },
    {
        id: 4,
        name: "Tai nghe Sony WH-1000XM4",
        price: "7,000,000 VND",
        description: "Trang bị bộ xử lý chống ồn QN1 giúp loại bỏ tạp âm từ môi trường xung quanh.",
    },
    {
        id: 5,
        name: "Apple Watch Series 8",
        price: "12,000,000 VND",
        description: "Apple Watch Series 8 được trang bị con quay hồi chuyển 3 trục mới và gia tốc kế lực cao.",
    }
]

export default function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const [keyword, setKeyword] = useState(searchQuery)
    useEffect(() => {
        setKeyword(searchQuery);
    }, [searchQuery]);
    const handleSearch = () => {
        if (keyword.trim()) {
            setSearchParams({ search: keyword.trim() });
        } else {
            setSearchParams({});
        }
    };
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Nhập từ khóa tìm kiếm..."
                style={{ padding: "5px", marginRight: "10px" }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
            <div style={{ display: "flex", gap: 30, marginTop: 20, flexWrap: "wrap" }}>
                {filteredProducts.map(product => (
                    <div key={product.id} style={{
                        marginBottom: "15px",
                        border: "1px solid black",
                        boxShadow: "2px 2px 10px black",
                        padding: "10px",
                        width: "250px"
                    }}>
                        <h3>{product.name}</h3>
                        <p>Giá: {product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
