import React from 'react'
import '../app/globals.css'
import Header from '@/components/Header'
import JournalGrid from '@/components/JournalGrid'

export default function Journal() {
  return (
    <div>
        <Header />
        <div className='mt-12'>
            <JournalGrid />
        </div>
    </div>
  )
}


