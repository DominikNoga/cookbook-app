import { NavBar } from '@/components/organisms/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      {
        // footer
      }
    </div>
  )
}
