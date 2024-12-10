"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartNoAxesCombined,
  Command,
  Frame,
  GalleryVerticalEnd,
  Hotel,
  LayoutDashboard,
  LogOut,
  Map,
  PieChart,
  School,
  ScrollText,
  Settings2,
  ShoppingCart,
  SquareTerminal,
  User,
  UserCog,
  UserRoundPen,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Tooltip } from "./ui/tooltip"
import Link from "next/link"

const data = {
  navMain: [
    {
      title: "Papers",
      url: "#",
      icon: ScrollText,
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
          url: "/assessment",
        },
      ],
    },
    {
      title: "Personal",
      url: "#",
      icon: User,
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
      icon: School,
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
        }
      ],
    },
    {
      title: "Profile",
      url: "#",
      icon: UserCog,
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
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
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
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Leaderboard",
      url: "/leaderboard",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Merchandise",
      url: "/merchandise",
      icon: ShoppingCart,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const { open } = useSidebar()
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href={"/dashboard"} className="flex items-center justify-center py-3">
          {open ? <Image src={"/logo.png"} width={100} height={100} alt="logo" /> : (
            <div className="bg-gray-100 rounded-md border px-2 py-1 flex items-center font-semibold">
              <span>c</span> <span className="underline">r</span>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div>
          {open ? (
            <div className="flex rounded-md items-center justify-center gap-3 border px-3 py-2 hover:bg-gray-200">
              <span className="text-sm">Logout</span>
              <LogOut size={18} />
            </div>
          ) : (
            <SidebarMenuButton tooltip="Logout">
              <LogOut size={36} />
            </SidebarMenuButton>
          )}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
