
type StudentType = {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
};

export default function StudentRow({ student }: { student: StudentType }) {
    return (
        <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ textAlign: "center", padding: "8px" }}>
                <input type="checkbox" />
            </td>
            <td style={{ padding: "8px" }}>{student.student_name}</td>
            <td style={{ padding: "8px" }}>{student.email}</td>
            <td style={{ padding: "8px" }}>{student.address}</td>
            <td style={{ padding: "8px" }}>{student.phone}</td>
            <td style={{ textAlign: "center", padding: "8px" }}>
                <button
                    style={{
                        marginRight: "8px",
                        color: "#f39c12",
                        border: "none",
                        background: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                </button>
                <button
                    style={{
                        color: "#e74c3c",
                        border: "none",
                        background: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                </button>
            </td>
        </tr>
    );
}
