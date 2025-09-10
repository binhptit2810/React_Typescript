import { Link } from 'react-router-dom'

export default function CustomLink() {

  return (
    <div className="container py-5 text-center">
      <Link to="/home-page" className="btn btn-primary">
        Đi tới trang HomePage
      </Link>
    </div>
  )
}
