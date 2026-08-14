'use client'
import { TextAlignJustify } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { navlinks } from "@/lib/services"
import Link from "next/link"


export const Navbar = () => {
    return (
        <Sheet open >
            <SheetTrigger>
                <TextAlignJustify/>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <div>
                        <SheetTitle>
                            Titulo
                        </SheetTitle>
                    </div>
                </SheetHeader>

                <div>
                    {
                        navlinks.map((item)=> (
                            <ul key={item.label}>
                                <li>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}