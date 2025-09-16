import React, { useEffect } from "react";
import { getStudentById } from "../services/studentDetailService";

export default function StudentDetail() {
    useEffect(() => {
        // Test: id có trong db.json
        getStudentById(1);

        // Test: id không tồn tại
        getStudentById(999);
    }, []);

    return <div>

    </div>;
}
