import { Link } from "react-router-dom"

export const products = [
    {
        id: 1,
        name: "Học React Router",
        description: "Làm quen với Dynamic Routers và useNavigate",
    },
    {
        id: 2,
        name: "Ôn lại Tailwind",
        description: "Thực hành UI cơ bản bằng tailwind CSS",
    },
    {
        id: 3,
        name: "Hoàn thành btvn",
        description: "Đẩy coce lên github và nộp link",

    }
]

export default function TaskList() {
    return (
        <div>
            <h2>Danh sách công việc</h2>
            <div style={{ display: "flex", gap: 30, }}>
                {products.map(product => (<div key={product.id} style={{ marginBottom: "15px", border: "1px solid black", boxShadow: "2px 2px 10px black " }}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <Link to={`/${product.id}`}>Xem chi tiết</Link> </div>
                ))} </div>
        </div>
    )
}
