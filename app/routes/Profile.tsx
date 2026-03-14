import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '~/context/AuthContext'

type Props = {}

const Profile = (props: Props) => {
  const {user, isLoading} = useAuth()
    if(user && !isLoading){
      return <Navigate to="/auth/sign-in" replace/>
    }
  return (
    <div>Profile</div>
  )
}

export default Profile