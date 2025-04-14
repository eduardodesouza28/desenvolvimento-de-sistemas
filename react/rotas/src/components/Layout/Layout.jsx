import { Menu } from "../menu/menu"
import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <div>
      <Menu />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>2025</p>
      </footer>
    </div>
  )
}