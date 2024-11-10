// components/JournalGrid.jsx
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"

const fakeJournalEntries = [
  { id: 1, date: '15 January 2024' },
  { id: 2, date: '16 January 2024' },
  { id: 3, date: '17 January 2024' },
  { id: 4, date: '18 January 2024' },
  { id: 5, date: '19 January 2024' },
  { id: 6, date: '20 January 2024' },
  { id: 7, date: '21 January 2024' },
  { id: 8, date: '22 January 2024' },
];

const JournalGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fakeJournalEntries.map((entry) => (
          <div
            key={entry.id}
            className="hover:scale-105 duration-500 cursor-pointer"
            onClick={() => alert(`Clicked on ${entry.date}`)}
          >
            <Card className="text-center">
                <CardHeader>
                <div className="flex flex-col items-center gap-4">
                <CardTitle className="font-black text-4xl">Entry</CardTitle>
                </div>
                <CardDescription>
                    Mood: Positive
                </CardDescription>
                </CardHeader>
                <Separator orientation="horizontal" className="bg-gray-300 mb-5" />
                <CardContent className="space-y-2">
                <div className="space-y-1 text-center">
                    <h1 className="text-4xl font-semibold">{entry.date}</h1>
                </div>
                </CardContent>
                <Separator orientation="horizontal" className="bg-gray-300" />
                <CardFooter className="flex justify-center">
                <div className="my-5 text-gray-400">
                    VOX
                </div>
                </CardFooter>
                </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalGrid;



