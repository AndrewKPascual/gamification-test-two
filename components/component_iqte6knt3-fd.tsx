/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/IQte6knt3FD
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Component_IQte6knt3FD() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <TrophyIcon className="h-6 w-6" />
          <span>Gamify</span>
        </Link>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6">
            <section>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Your Goals</h1>
                <Button size="sm">Add Goal</Button>
              </div>
              <div className="mt-4 grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Exercise 3 times a week</CardTitle>
                    <CardDescription>Maintain a healthy lifestyle by exercising regularly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Rewards</span>
                        <Button size="sm" variant="outline">
                          Add Reward
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <LeafIcon className="h-5 w-5 text-green-500" />
                            <span>Black bean tofu</span>
                          </div>
                          <Button size="sm" variant="ghost">
                            Claim
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MapIcon className="h-5 w-5 text-green-500" />
                            <span>Go for a walk and play Pokemon Go</span>
                          </div>
                          <Button size="sm" variant="ghost">
                            Claim
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Meditate for 20 minutes daily</CardTitle>
                    <CardDescription>Improve mental well-being through daily meditation.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Rewards</span>
                        <Button size="sm" variant="outline">
                          Add Reward
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <SpadeIcon className="h-5 w-5 text-green-500" />
                            <span>Aromatherapy bath</span>
                          </div>
                          <Button size="sm" variant="ghost">
                            Claim
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <HeadphonesIcon className="h-5 w-5 text-green-500" />
                            <span>Listen to a calming playlist</span>
                          </div>
                          <Button size="sm" variant="ghost">
                            Claim
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold">Add a New Goal</h2>
              <form className="mt-4 grid gap-4">
                <Input placeholder="Goal (e.g., Exercise 3 times a week)" />
                <div className="grid gap-2">
                  <Label htmlFor="reward">Rewards</Label>
                  <div className="flex items-center gap-2">
                    <Input id="reward" placeholder="Reward (e.g., Black bean tofu)" />
                    <Button size="sm" variant="outline">
                      Add Reward
                    </Button>
                  </div>
                </div>
                <Button type="submit">Save Goal</Button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex h-16 items-center justify-between border-t bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Gamify. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="text-sm hover:underline" href="#">
            Privacy
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  )
}

function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function SpadeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
      <path d="M12 18v4" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}