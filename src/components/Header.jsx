import React from 'react'
import Link from 'next/link';


export default function Header() {
  return (
    <div>
    <header className="flex">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-white font-black tracking-tighter text-xl">VOX</h1>

        <nav className="hidden md:flex space-x-6">
        <Link href="/Dashboard" className="text-white hover:text-gray-600">
          Dashboard
        </Link>
        <Link href="/Dashboard" className="text-white hover:text-gray-600">
          Journal
        </Link>
        <Link href="/Dashboard" className="text-white hover:text-gray-600">
          Account
        </Link>
        </nav>
      </div>
    </header>
    </div>
  )
}
