import React from 'react'
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { BookKey } from 'lucide-react';
import { ChartLine } from 'lucide-react';



export default function Header() {
  return (
    <div>
    <header className="flex">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-white font-black tracking-tighter text-3xl">VOX</h1>

        <nav className="hidden md:flex space-x-6">
        <Link href="/Dashboard" className="text-white hover:text-gray-600">
        <ChartLine size={36} absoluteStrokeWidth />
        </Link>
        <Separator orientation="vertical" className="bg-gray-400 w-[1px] h-10" />

        <Link href="/Journal" className="text-white hover:text-gray-600">
        <BookKey size={36} absoluteStrokeWidth />
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
