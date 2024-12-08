"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GalleryVerticalEnd, Search } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "#",
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
            title: "Leaderboard",
            url: "#",
        },
        {
            title: "Merchandise",
            url: "#",
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
                    <SidebarMenu>
                        <h1 className="flex items-center justify-center font-bold py-3">Cleverank</h1>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    {data.navMain.map((navItem, index) => (
                        <SidebarGroup key={index}>
                            <SidebarGroupLabel>{navItem.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {navItem.items && navItem.items.map((subItem, subIndex) => (
                                        <SidebarMenuItem key={subIndex}>
                                            <SidebarMenuButton asChild>
                                                <a href={subItem.url}>{subItem.title}</a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

