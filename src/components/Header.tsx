import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    'btn mx-2 ' + (isActive ? 'btn-danger' : 'btn-light')

  return (
    <nav className="d-flex justify-content-center gap-3 py-4">
      <NavLink to="/" className={linkClass} end>
        Home
      </NavLink>
      <NavLink to="/product" className={linkClass}>
        Product
      </NavLink>
      <NavLink to="/detail" className={linkClass}>
        Detail
      </NavLink>
    </nav>
  )
}
