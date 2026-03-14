import React from 'react'
import { Link, Outlet } from 'react-router'
import { Dumbbell } from 'lucide-react'
import { Button } from '../ui/Button'
import { useAuth } from '~/context/AuthContext'
import { UserButton } from '@neondatabase/neon-js/auth/react'

type Props = {}

const Navbar = (props: Props) => {
  const {user} = useAuth();
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='fixed top-0 left-0 right-0 z-50 border-b-border bg-background/80 backdrop-blur-md'>
        <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
          <Link to="/"
            className='flex items-center gap-2 text-foreground'>
            <Dumbbell className='w-6 h-6 text-accent' />
            <span className='font-semibold text-lg'>Gym Master</span>
          </Link>
          <nav>
            {user ? (
              <div className='flex items-center gap-2'>
                <Link to="/Profile">
                  <Button variant="ghost" size="sm">My Plan</Button>
                </Link>
                <UserButton/>

              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <Link to="auth/sign-in">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link to="auth/sign-up">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}

          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar