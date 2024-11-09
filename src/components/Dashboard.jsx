import React from 'react'
import DoughnutChart from "@/components/datacharts/DoughnutChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Dashboard() {

  const totalEntries = 148;

  return (
    <div>
      <Card className="bg-zinc-900 text-white">
        <CardHeader>
          <div className="flex flex-col items-center gap-4">
            <CardTitle className="font-bold text-4xl">Entries</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-2">

          <div className="relative w-[300px] h-[300px] mx-auto">
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-5xl font-bold z-10">
              {totalEntries}
            </h1>
            <DoughnutChart />
          </div >
        </CardContent>

        <CardFooter className="flex justify-center">
          <div className="my-5"></div>
        </CardFooter>
      </Card>
    </div>
  );
}
