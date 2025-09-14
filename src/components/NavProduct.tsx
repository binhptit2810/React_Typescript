import { Outlet } from 'react-router-dom'

export default function NavProduct() {
    return (
        <div>
            <div style={{ textAlign: "center", backgroundColor: "blue", padding: 70, color: "white" }}>
                <h1>Trang chi tiết sản phẩm</h1>
                <p>Danh sách sản phẩm</p>
            </div>
            <Outlet />
        </div>

    )
}
