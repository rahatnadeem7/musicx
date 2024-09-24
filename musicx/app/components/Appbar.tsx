"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
//@ts-ignore
import { Music } from "lucide-react"

export function Appbar() {
    const session = useSession();

    return <div className="flex justify-between px-20 pt-4">
        <div className="text-lg font-bold flex flex-col justify-center text-white">
            Musicx
        </div>
        <div>
            {session.data?.user && <Button className="bg-teal-green-600 text-white hover:bg-teal-green-900" onClick={() => signOut()}>Logout</Button>}
            {!session.data?.user &&<Button className="bg-teal-green-900 text-white hover:bg-teal-green-900" onClick={() => signIn()}>Signin</Button>}
        </div>
    </div>
}