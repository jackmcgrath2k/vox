import React from 'react'
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"


export default function Header() {
  return (
    <div>
    <header className="flex">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="text-white hover:text-gray-600">
        <h1 className="text-white font-black tracking-tighter text-3xl">VOX</h1>
      </Link>

        <nav className="hidden md:flex space-x-6">
        <Link href="/Dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-10 hover:text-amber-500 transition-colors duration-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>

        </Link>
        <Separator orientation="vertical" className="bg-gray-400 w-[1px] h-10" />
        <Link href="/Journal" className="text-white hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:text-amber-500 transition-colors duration-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
        </Link>
        <Separator orientation="vertical" className="bg-gray-400 w-[1px] h-10" />

        <Link href="/Account" className="text-black hover:text-gray-600">
          <Avatar>
           <AvatarImage src="" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
        </Link>
        </nav>
      </div>
    </header>
    </div>
  )
}
