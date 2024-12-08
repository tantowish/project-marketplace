import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"
import SignOutButton from "./sign-out-button"
import SignInButton from "./sign-in-button"
import Link from "next/link"

export default async function Navbar() {
    const session = await getServerSession(authOptions)
  return (
    <div className="w-full flex flex-wrap justify-center items-center px-2">
        <div className="flex flex-wrap justify-between max-w-screen-xl w-full p-4">
            <Link href="/"><p className="text-xl">Logo</p></Link>
            <div>
                {session ?
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={session.user.image!} />
                                <AvatarFallback>
                                    {session.user.name
                                        .split(' ')
                                        .map((part) => part[0].toUpperCase())
                                        .join('')
                                        .slice(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Shop</DropdownMenuItem>
                        <DropdownMenuItem>
                            <SignOutButton />
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                    :
                <SignInButton />
                }

            </div>
        </div>
    </div>
  )
}