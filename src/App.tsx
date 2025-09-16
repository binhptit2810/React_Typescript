
import Bai02 from "./Session29/Bai02";
import StudentList from "./Session29/Bai04";
import CreateStudent from "./Session29/CreateStudent";
import StudentDetail from "./Session29/StudentDetail";
import StudentHeader from "./Session29/StudentHeader";
import StudentTable from "./Session29/StudentTable";

export default function App() {

  return (
    <div>
      <Bai02 />
      <StudentList />
      <StudentDetail />
      <CreateStudent />
      <div style={{ width: "80%", margin: "40px auto", border: "1px solid #ddd", borderRadius: "6px", overflow: "hidden" }}>
        <StudentHeader />
        <StudentTable />
      </div>
    </div>
  );
}