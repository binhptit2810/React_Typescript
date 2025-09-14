import { Link } from "react-router-dom";
import { posts } from "./data";

export default function Posts() {
    return (
        <div>
            <h2>Danh sách bài viết</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "6px"
                        }}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <Link to={`/blog/posts/${post.id}`}>Đọc chi tiết</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
