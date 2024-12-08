"use client"

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import Link from "next/link"

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
        },
        {
            title: "Leaderboard",
            url: "/leaderboard",
        },
        {
            title: "Papers",
            url: "#",
            items: [
                {
                    title: "Recommendation",
                    url: "#",
                },
                {
                    title: "Search",
                    url: "#",
                },
                {
                    title: "Reading",
                    url: "#",
                },
                {
                    title: "Assessment",
                    url: "#",
                },
            ],
        },
        {
            title: "Personal",
            url: "#",
            items: [
                {
                    title: "Library",
                    url: "#",
                },
                {
                    title: "Feedback",
                    url: "#",
                },
                {
                    title: "Tracks",
                    url: "#",
                },
                {
                    title: "Goals",
                    url: "#",
                },
            ],
        },
        {
            title: "College",
            url: "#",
            items: [
                {
                    title: "Library",
                    url: "#",
                },
                {
                    title: "Class",
                    url: "#",
                },
                {
                    title: "Students",
                    url: "#",
                },
                {
                    title: "Groups",
                    url: "#",
                },
                {
                    title: "Tracks",
                    url: "#",
                },
            ],
        },
        {
            title: "Merchandise",
            url: "/merchandise",
        },
        {
            title: "Profile",
            url: "#",
            items: [
                {
                    title: "Personal",
                    url: "#",
                },
                {
                    title: "Academic",
                    url: "#",
                },
                {
                    title: "Research",
                    url: "#",
                },
                {
                    title: "Badges",
                    url: "#",
                },
                {
                    title: "Bounty",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            items: [
                {
                    title: "Security",
                    url: "#",
                },
                {
                    title: "Feedback",
                    url: "#",
                },
                {
                    title: "Support",
                    url: "#",
                },
                {
                    title: "Logout",
                    url: "#",
                },
            ],
        },
    ],
}

export default function MainSidebar({ children }) {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <SidebarMenu className="flex flex-row items-center justify-between px-5">
                        <h1 className="flex items-center justify-center font-bold py-3">Cleverank</h1>
                        <SidebarTrigger className="-ml-1" />
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {data.navMain.map((navItem) => (
                            navItem.items ? (
                                <SidebarGroup key={navItem.title}>
                                    <SidebarGroupLabel>{navItem.title}</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {navItem.items.map((subItem) => (
                                                <SidebarMenuItem key={subItem.title}>
                                                    <SidebarMenuButton asChild>
                                                        <Link href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            ) : (
                                <SidebarMenuItem key={navItem.title} className="px-2">
                                    <SidebarMenuButton asChild>
                                        <Link href={navItem.url}>
                                            <span>{navItem.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
