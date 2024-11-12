import React from 'react'
import '../app/globals.css'
import Header from '@/components/Header'
import JournalGrid from '@/components/JournalGrid'

export default function Journal() {
  return (
    <div className='text-center'>
        <Header />
        <div className='text-center'>
            <JournalGrid />
        </div>
        <div className='mt-12'>
          <p className='text-sm mb-8'>Latest Entry</p>
          <h1 className='text-5xl font-bold'>Entry #143</h1>
          <div className='mt-8'>
            <p>
              journal entry content goes here. maybe try run it through an AI to put in the right punctuation etc?
            </p>
          </div>
        </div>
    </div>
  )
}


