export default function StudentHeader() {
    return (
        <div
            style={{
                backgroundColor: "#34495e",
                padding: "14px 20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2 style={{ margin: 0 }}>
                Quản lý <b>sinh viên</b>
            </h2>
            <button
                style={{
                    backgroundColor: "#27ae60",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Thêm mới sinh viên
            </button>
        </div>
    );
}
