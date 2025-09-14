import { useParams, Link } from "react-router-dom"
import { products } from "./TaskList"
export default function TaskDetail() {
    const { id } = useParams()
    const product = products.find(p => p.id === Number(id))

    if (!product) {
        return (
            <div>
                <h2>công việc ko tồn tại.</h2>
                <Link to="/">Quay lại</Link>
            </div>
        )
    }

    return (
        <div style={{ padding: 20 }}>
            <div style={{ border: "1px solid black", padding: 20, maxWidth: 500 }}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to="/">Quay Lại</Link>
            </div>
        </div>
    )
}
