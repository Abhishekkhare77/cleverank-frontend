"use client";

import * as React from "react";
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
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Tooltip } from "./ui/tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const data = {
  navMain: [
    {
      title: "Papers",
      url: "/recommended",
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
          url: "/all-assessments",
        },
      ],
    },
    {
      title: "Personal",
      url: "/personal/library",
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
      url: "/college/library",
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
        },
      ],
    },
    {
      title: "Profile",
      url: "/profile",
      icon: UserCog,
      items: [
        {
          title: "Personal",
          url: "/profile",
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
      url: "/settings/security",
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
};

export function AppSidebar({ ...props }) {
  const { open } = useSidebar();
  const router = useRouter();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center py-3">
          {open ? (
            <div className="flex items-center justify-between px-2 w-full">
              <Link href={"/dashboard"}>
                <Image src={"/logo.png"} width={100} height={100} alt="logo" />
              </Link>
              <SidebarTrigger />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <SidebarTrigger className="-mt-2" />
              <Link href={"/dashboard"}>
                <div className="bg-gray-100 rounded-md border px-2 py-1 flex items-center font-semibold">
                  <span>c</span> <span className="underline">r</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div
          className="cursor-pointer"
          onClick={async () => {
            try {
              // Sign out from Google session
              await signOut({ callbackUrl: "/login" }); // Ensure user is redirected to login after signing out
            } catch (error) {
              console.error("Error signing out from Google:", error);
            }

            // Clear local storage and navigate to login
            localStorage.removeItem("token");
            router.push("/login");
          }}
        >
          {open ? (
            <div className="flex rounded-md items-center justify-center gap-3 border px-3 py-2 hover:bg-sidebar-accent">
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
    </Sidebar>
  );
}
