import { RouterProvider } from 'react-router-dom';
import { router } from '@/routing/router';
import ThemeContextProvider from '@/providers/ThemeContextProvider';


export default function App() {
  return (
    <ThemeContextProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </ThemeContextProvider>
  );
}
