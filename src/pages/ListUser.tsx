import { Link } from 'react-router-dom'
import { users } from '../data/users'

export default function ListUser() {
  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">Danh sách người dùng</h3>
      <div className="row g-3">
        {users.map((u) => (
          <div className="col-12 col-sm-6 col-md-4" key={u.id}>
            <div className="border rounded p-3 h-100">
              <p className="mb-1"><strong>Id:</strong> {u.id}</p>
              <p className="mb-1"><strong>UserName:</strong> {u.name}</p>
              <p className="mb-1"><strong>Email:</strong> {u.email}</p>
              <p className="mb-3"><strong>Address:</strong> {u.address}</p>
              <Link to={`/user-detail/${u.id}`} className="btn btn-outline-secondary w-100">
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
