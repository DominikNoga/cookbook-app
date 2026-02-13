import { NavBar } from '@/components/shared/organisms/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <NavBar />
      <main className='container mx-auto px-4 pt-4'>
        <Outlet />
      </main>
    </div>
  );
}
