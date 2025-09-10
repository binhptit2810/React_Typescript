import { useParams, Link } from 'react-router-dom'
import { users } from '../data/users'

export default function UserDetail() {
  const { id } = useParams()
  const userId = Number(id)
  const user = users.find((u) => u.id === userId)

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h3>Không tìm thấy người dùng</h3>
        <Link to="/" className="btn btn-link">Quay lại danh sách</Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">Thông tin chi tiết</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="border rounded p-3">
            <p className="mb-1"><strong>Id:</strong> {user.id}</p>
            <p className="mb-1"><strong>UserName:</strong> {user.name}</p>
            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="mb-3"><strong>Address:</strong> {user.address}</p>
            <Link to="/" className="btn btn-outline-secondary">Xem chi tiết</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
