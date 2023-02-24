import React from 'react'
import MainFooter from './footer/MainFooter'
import Header from './navbar/Header'

const Layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <MainFooter />
    </>
  )
}

export default Layout