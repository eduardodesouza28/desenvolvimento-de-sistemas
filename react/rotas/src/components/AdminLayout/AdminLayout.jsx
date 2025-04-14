import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";


export const AdminLayout = () => {
  return (
    <div>
      <aside>
        <h2>Painel admin</h2>
        <nav>
          <Link to='/admin'>Dashboard</Link>
          <Link to='/admin/users'>Users</Link>
          <Link to='/'>Home</Link>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}