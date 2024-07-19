import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import {useEffect} from "react";

const HomePage = () => {
  console.log("checking params-------")
  const { logIn, logOut, signUp, getToken, isAuthenticated, userMetadata } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      console.log('is authenticated')
    } else {
      logIn({
        scopes: ['openid', 'profile', 'User.Read.All', 'Group.Read.All']
      })
    }
  }, [isAuthenticated])
  return (
    <>
      <button
        onClick={() => logIn({
          scopes: ['openid', 'profile', 'User.Read.All', 'Group.Read.All']
        })}
      >
        {'Log In'}
      </button>
      <button
        onClick={() => logOut()}
      >
        {'Log Out'}
      </button>
      {!isAuthenticated && (
        <button
          onClick={() => signUp()}>
          Sign Up
        </button>
      )}
    </>
  )
}

export default HomePage
