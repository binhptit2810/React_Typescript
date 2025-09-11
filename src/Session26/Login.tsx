// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const handleLogin = () => {
//     navigate("/account");
//   };

//   return (
//     <div>
//       <h2>Trang Login</h2>
//       <button onClick={handleLogin}>Đăng nhập</button>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface User {
  email: string;
  password: string;
  role: string;
}
export default function Login() {
  const navigate = useNavigate()
  const [user] = useState<User>({
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin"
  });
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
    role: ""
  });
  const [error, setError] = useState<string>("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.email === user.email &&
      formData.password === user.password &&
      formData.role === user.role
    ) {
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không đúng!");
    }
  };
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">-- Chọn quyền --</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
