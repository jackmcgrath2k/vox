import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger
} from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button";
import { Gem } from 'lucide-react';






export default function Account() {


  return (
    <div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Edit</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Jack</CardTitle>
            <CardDescription>
              Member since: Jan 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label>Total Entries</Label>
              <h1 className="text-5xl font-bold">148</h1>
            </div>
            <div className="space-y-1">
              <Label>Account Type:</Label>
              <div className="flex m-1">
              <h1>Free Tier</h1>
              
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div>
            <Button className="border border-lg hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 hover:text-black">
            <Gem />Upgrade
            </Button>
            
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Edit Account</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <h1>hi</h1>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <h1>hi</h1>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex">
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and all data associated with your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                 
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                  
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </main>
    </div>
    </div>
  )
}


//<h1 className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500 font-bold text-7xl mb-1'>