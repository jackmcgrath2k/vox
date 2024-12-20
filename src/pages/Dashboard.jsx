import React from 'react'
import '../app/globals.css'
import DoughnutChart from "@/components/datacharts/DoughnutChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DataTableDemo } from '@/components/datacharts/EntriesTable';
import Header from '@/components/Header';



export default function Dashboard() {

  const totalEntries = 148;
  const totalDays = 57;

  return (
    <div>
      <Header />
      <div className='mt-18 me-12 ms-12'>
    <div className="min-h-screen ">
      <div className="grid grid-cols-4 gap-4">
        <div className='col-span-1'>
          {/*Doughnut*/}
      <Card className="bg-transparent text-white">
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
          <div className=""></div>
        </CardFooter>
      </Card>
      </div>
      {/*Table*/}
      <div className='col-span-3'>
      <DataTableDemo />
      </div>
    </div>

      <Card className="bg-transparent text-white">
          <CardHeader>
          <div className="flex flex-col items-center gap-4">

            <CardTitle className="font-bold text-5xl">something here</CardTitle>
            </div>
            <CardDescription className="text-center">
              for the meantime this
            </CardDescription>
          </CardHeader>
          <Separator orientation="horizontal" className="bg-gray-300 mb-5" />
          <CardContent className="space-y-2">
          <h1 className="text-9xl text-center font-bold z-10">
              {totalDays}
            </h1>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="">
            <h1 className=' font-bold text-xl'>numbers and such</h1>
            </div>
          </CardFooter>
        </Card>

    </div>
    </div>
    </div>
  );
}


{/* 
    month selector
      <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Month</SelectLabel>
                <SelectItem value="january">January</SelectItem>
                <SelectItem value="february">February</SelectItem>
                <SelectItem value="march">March</SelectItem>
                <SelectItem value="april">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="june">June</SelectItem>
                <SelectItem value="july">July</SelectItem>
                <SelectItem value="august">August</SelectItem>
                <SelectItem value="september">September</SelectItem>
                <SelectItem value="october">October</SelectItem>
                <SelectItem value="november">November</SelectItem>
                <SelectItem value="december">December</SelectItem>
              </SelectGroup>
            </SelectContent>
      </Select>

  day streak
      <Card className="bg-zinc-900 text-white">
          <CardHeader>
          <div className="flex flex-col items-center gap-4">

            <CardTitle className="font-bold text-5xl">Well done!</CardTitle>
            </div>
            <CardDescription className="text-center">
              You've stayed consistent
            </CardDescription>
          </CardHeader>
          <Separator orientation="horizontal" className="bg-gray-300 mb-5" />
          <CardContent className="space-y-2">
          <h1 className="text-9xl text-center font-bold z-10">
              {totalDays}
            </h1>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="">
            <h1 className=' font-bold text-xl'>DAYS</h1>
            </div>
          </CardFooter>
        </Card>
  */}