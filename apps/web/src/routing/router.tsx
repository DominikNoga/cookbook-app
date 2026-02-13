import RootLayout from '@/layout/RootLayout/RootLayout';
import { CookbookPage } from '@/pages/CookbookPage';
import { CreateCookbookPage } from '@/pages/CreateCookbookPage';
import { CreateRecipePage } from '@/pages/CreateRecipePage';
import { CreatorCookbooksPage } from '@/pages/CreatorCookbooksPage';
import { CreatorDashboardPage } from '@/pages/CreatorDashboardPage';
import { EditCookbookPage } from '@/pages/EditCookbookPage';
import { EditRecipePage } from '@/pages/EditRecipePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { ExplorePage } from '@/pages/ExplorePage';
import { LibraryPage } from '@/pages/LibraryPage';
import { RecipePage } from '@/pages/RecipePage';
import { SettingsPage } from '@/pages/SettingsPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to='/explore' replace /> },

      // Public
      { path: 'explore', element: <ExplorePage /> },
      { path: 'cookbooks/:cookbookId', element: <CookbookPage /> },
      { path: 'cookbooks/:cookbookId/recipes/:recipeId', element: <RecipePage /> },

      // Auth (stub now)
      {
        path: 'auth',
        children: [
          { path: 'sign-in', element: <SignInPage /> },
          { path: 'sign-up', element: <SignUpPage /> },
        ],
      },

      // Buyer (later protect)
      { path: 'library', element: <LibraryPage /> },
      { path: 'settings', element: <SettingsPage /> },

      // Creator (later protect)
      {
        path: 'creator',
        children: [
          { index: true, element: <CreatorDashboardPage /> },
          { path: 'cookbooks', element: <CreatorCookbooksPage /> },
          { path: 'cookbooks/new', element: <CreateCookbookPage /> },
          { path: 'cookbooks/:cookbookId/edit', element: <EditCookbookPage /> },
          { path: 'cookbooks/:cookbookId/recipes/new', element: <CreateRecipePage /> },
          { path: 'cookbooks/:cookbookId/recipes/:recipeId/edit', element: <EditRecipePage /> },
        ],
      },
    ],
  },
]);
