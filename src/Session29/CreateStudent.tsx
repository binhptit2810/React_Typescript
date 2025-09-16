import React, { useEffect } from "react";
import { createStudent } from "../services/studentCreateService";

export default function CreateStudent() {
    useEffect(() => {
        const newStudent = {
            id: 6,
            student_name: "Nguyen Van F",
            email: "vanf@example.com",
            address: "Hue",
            phone: "0977778888",
            status: true,
            created_at: "2025-09-16"
        };

        createStudent(newStudent);
    }, []);

    return (
        <div>Bai06</div>
    )
}
