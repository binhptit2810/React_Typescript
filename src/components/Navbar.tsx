import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "blue", color: "white", padding: 15 }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>
            <Outlet />
        </div>

    )
}
