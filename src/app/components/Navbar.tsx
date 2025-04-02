import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar