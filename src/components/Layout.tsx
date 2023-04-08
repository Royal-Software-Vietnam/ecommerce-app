import React from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'

function Layout({children}:{children: React.ReactNode}) {
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}

export default Layout