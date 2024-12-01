import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { LogOut } from 'lucide-react'


import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useNavigate } from "react-router-dom"

export default function Heading() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/auth/login')
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

                <Menubar>
                    <MenubarMenu >
                        <MenubarTrigger>
                            <Avatar>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </MenubarTrigger>
                        <MenubarContent align='end' >
                            <MenubarItem onClick={handleLogout} className='justify-between'>Log out <LogOut width={18} /> </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            </div>
        </div>
    )
}
