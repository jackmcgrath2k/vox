// components/JournalGrid.jsx
  import React from 'react';
  import { Button } from "../components/ui/button";
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { ScrollArea } from "@/components/ui/scroll-area"
  import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ToggleBookmark = () => {
  const [isSaved, setIsSaved] = useState(false);
}
  const handleToggle = () => {
    setIsSaved((prev) => !prev);
  };

const JournalGrid = () => {
  return (

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Entries</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Entries</SheetTitle>
          <SheetDescription>
            Here are your journal entries.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center gap-4">
          <ScrollArea className="h-1/6 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Journal Entries</h4>
        <div>
        buttons
      </div>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
            <div className='flex items-center justify-center'>
  <div className=''>
    <Card>
      <CardHeader>
       
        <div className="flex justify-between items-center">
         
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <CardTitle className="font-bold text-md">Entry #134</CardTitle>
              <CardDescription className="text-xs">15 January 2025</CardDescription>
            </div>
          </div>

          <div>
          <DropdownMenu>
              <DropdownMenuTrigger>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Entry #</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <Button className="bg-blue-600 hover:bg-blue-700 duration-300">Add to Collection</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Button className="bg-red-600 hover:bg-red-700 duration-300">Delete</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <h1 className='text-xs text-gray-600'>Hover to reveal summary.</h1>
        <div className="space-y-2 rounded bg-gray-300 text-gray-300 hover:bg-transparent hover:text-gray-800 duration-1000">
          <h1 className="text-xs font-medium">
            Summarized text content. Maybe use Vertex or Gemini or something else.
          </h1>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
          </div>
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default JournalGrid;
