import { NavLink } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import Button from '@/components/ui/button';
import ModeToggle from '@/components/mode-toggle';

export function NavBar() {
  const linkClasses =
    'px-3 py-2 text-sm font-medium transition-colors hover:text-primary';

  const activeClasses = 'text-primary';

  return (
    <header className='border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <NavLink to='/explore' className='text-lg font-semibold'>
          Cookbooks
        </NavLink>

        <NavigationMenu>
          <NavigationMenuList className='gap-4'>
            <NavigationMenuItem>
              <NavLink
                to='/explore'
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClasses : ''}`
                }
              >
                Explore
              </NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink
                to='/library'
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClasses : ''}`
                }
              >
                Library
              </NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink
                to='/creator'
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClasses : ''}`
                }
              >
                Creator
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2'>
          <Button variant='outline' asChild>
            <NavLink to='/auth/sign-in'>Sign in</NavLink>
          </Button>

          <Button asChild>
            <NavLink to='/auth/sign-up'>Sign up</NavLink>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
