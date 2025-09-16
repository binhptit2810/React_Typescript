import { useEffect, useState } from "react";
import { getAllStudent } from "../services/studentService";
import StudentRow from "./StudentRow";

type StudentType = {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
};

export default function StudentTable() {
    const [students, setStudents] = useState<StudentType[]>([]);

    useEffect(() => {
        getAllStudent().then((data) => setStudents(data));
    }, []);

    return (
        <div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "#f4f6f7" }}>
                    <tr>
                        <th style={{ padding: "10px" }}></th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Tên sinh viên</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Địa chỉ</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Số điện thoại</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Lựa chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <StudentRow key={s.id} student={s} />
                    ))}
                </tbody>
            </table>

            <div
                style={{
                    padding: "10px",
                    fontSize: "14px",
                    color: "#555",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span>Hiển thị {students.length}/10 bản ghi</span>
                <div>
                    <button style={{ margin: "0 4px" }}>Trước</button>
                    <button style={{ margin: "0 4px", backgroundColor: "#3498db", color: "white" }}>1</button>
                    <button style={{ margin: "0 4px" }}>2</button>
                    <button style={{ margin: "0 4px" }}>3</button>
                    <button style={{ margin: "0 4px" }}>Sau</button>
                </div>
            </div>
        </div>
    );
}
