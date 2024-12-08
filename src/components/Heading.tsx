import { Link, LogOut, User2Icon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useNavigate } from "react-router-dom"
import { Button } from './ui/button'
import { Link as RouterLink } from "react-router-dom"

export default function Heading() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/auth/login',{replace: true})
    }

    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1 className="font-semibold text-xl">Notes App</h1>
                <p className="mt-1 text-gray-500">
                    A simple notes app built with React, Next.js, and MongoDB.
                </p>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'} className='rounded-full' size={'icon'}>
                            <Avatar className='h-10 w-10 rounded-full'>
                                <AvatarFallback className='h-full w-full' />
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel> My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild> 
                            <RouterLink to="/profile" >
                                <User2Icon width={18} /> Profile 
                            </RouterLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleLogout}> <LogOut width={18} /> Log out </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}
