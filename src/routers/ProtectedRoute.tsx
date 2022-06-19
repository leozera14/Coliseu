import React from 'react'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute({element}: {element: JSX.Element}) {
  const token = window?.localStorage?.getItem('auth')  
  
  if(!token) {
    return <Navigate to={{pathname: '/login'}}/>
  }

  return element
}