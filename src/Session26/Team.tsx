import { useParams } from "react-router-dom";

export default function Team() {
    const { teamId } = useParams();
    return (
        <div>
            <h3>Chi tiết Team {teamId}</h3>
            <p>Đây là thông tin của team có ID = {teamId}</p>
        </div>
    );
}
