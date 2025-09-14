import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    width: "200px",
                    backgroundColor: "#4f46e5",
                    color: "white",
                    padding: "20px",
                    minHeight: "100vh"
                }}
            >
                <h2>My Blog</h2>
                <nav>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                            <Link to="/blog/posts" style={{ color: "white" }}>
                                Posts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={{ flex: 1, padding: "20px" }}>
                <Outlet />
            </div>
        </div>
    );
}
