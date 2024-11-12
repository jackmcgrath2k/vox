import React from "react";
import '../app/globals.css'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "../components/ui/button";
import { Gem } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import Header from "../components/Header";







export default function Account() {


  return (
    <div>
      <Header />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Edit</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="justify-center text-center">
        <Card>
          <CardHeader>
          <div className="flex flex-col items-center gap-4">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <CardTitle className="font-bold text-4xl">Jack</CardTitle>
            </div>
            <CardDescription>
              Member since: Jan 2025
            </CardDescription>
          </CardHeader>
          <Separator orientation="horizontal" className="bg-gray-300 mb-5" />
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label>Total Entries</Label>
              <h1 className="text-5xl font-bold">148</h1>
            </div>
            <div className="space-y-1">
              <Label>Account Type:</Label>
              <div className="text-gray-500">
              <h1>Free Tier</h1>
              </div>
            </div>
          </CardContent>
          <Separator orientation="horizontal" className="bg-gray-300" />
          <CardFooter className="flex justify-center">
            <div className="my-5">
            <Button className="bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-400 hover:text-black">
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
               After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-2">
            <div className="flex flex-col space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Change details</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Name Namerson" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Change password</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Change password</DialogTitle>
                  <DialogDescription>
                    Here you can create a new password.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Current password
                    </Label>
                    <Input id="name" value="" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      New password
                    </Label>
                    <Input id="username" value="" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button>ayo i forgot bruh</Button>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled>Subscription settings</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Subscription settings</DialogTitle>
                  <DialogDescription>
                    Change or exit your plan.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Current password
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      New password
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Notifcation settings</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Notification settings</DialogTitle>
                  <DialogDescription>
                    Adjust your preferences for email notifications.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Switch />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Contact Support</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Support</DialogTitle>
                  <DialogDescription>
                    email type thing
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <p>put em here or somehting</p>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            </div>
          </CardContent>
          <div className="flex justify-center mb-3.5">
          <AlertDialog >
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="bg-gradient-to-r from-rose-800 via-red-900 to-rose-950">Delete</Button>
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
                 
                  <AlertDialogCancel className="bg-blue-500 border-transparent hover:bg-blue-800 duration-500 hover:text-white">Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                  
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            </div>
          <Separator orientation="horizontal" className="bg-gray-300 mb-3.5" />
            <CardFooter className="flex justify-center">
            <div className="flex">
            <Button className="bg-blue-500 border-transparent hover:bg-blue-800 duration-500 hover:text-white">Save Changes</Button>
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