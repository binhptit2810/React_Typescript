import React, { useEffect, useState } from "react";
import { getAllStudent } from "../services/studentService";

type StudentType = {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
};

export default function StudentList() {
    const [students, setStudents] = useState<StudentType[]>([]);
    useEffect(() => {
        getAllStudent()
            .then((data) => {
                console.log("Danh sach sinh vien:", data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Danh sach sinh vien</h2>
            <ul>
                {students.map((s) => (
                    <li key={s.id}>
                        {s.student_name} - {s.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
