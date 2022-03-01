import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="item-center  flex space-x-5">
        <Link href="/">
          <img src="images/logo.png" alt="" />
        </Link>
        <div className="hidden  items-center space-x-5 md:inline-flex">
          <h3 className="">About</h3>
          <h3 className="">Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
          <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3>Get Started</h3>
            <h3></h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
