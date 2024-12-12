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
                    url: "/recommended",
                },
                {
                    title: "Search",
                    url: "/papers/search",
                },
                {
                    title: "Reading",
                    url: "/papers/reading",
                },
                {
                    title: "Assessment",
                    url: "/all-assessments",
                },
            ],
        },
        {
            title: "Personal",
            url: "#",
            items: [
                {
                    title: "Library",
                    url: "/personal/library",
                },
                {
                    title: "Feedback",
                    url: "/personal/feedback",
                },
                {
                    title: "Tracks",
                    url: "/personal/tracks",
                },
                {
                    title: "Goals",
                    url: "/personal/goals",
                },
            ],
        },
        {
            title: "College",
            url: "#",
            items: [
                {
                    title: "Library",
                    url: "/college/library",
                },
                {
                    title: "Class",
                    url: "/college/class",
                },
                {
                    title: "Students",
                    url: "/college/students",
                },
                {
                    title: "Groups",
                    url: "/college/groups",
                },
                {
                    title: "Tracks",
                    url: "/college/tracks",
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
                    url: "/profile/personal",
                },
                {
                    title: "Academic",
                    url: "/profile/academic",
                },
                {
                    title: "Research",
                    url: "/profile/research",
                },
                {
                    title: "Badges",
                    url: "/profile/badges",
                },
                {
                    title: "Bounty",
                    url: "/profile/bounty",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            items: [
                {
                    title: "Security",
                    url: "/settings/security",
                },
                {
                    title: "Feedback",
                    url: "/settings/feedback",
                },
                {
                    title: "Support",
                    url: "/settings/support",
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
                        <Link href={"/"} className="flex items-center justify-center font-bold py-3">Cleverank</Link>
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
                <div className="p-5">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
