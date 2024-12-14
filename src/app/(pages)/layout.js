import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="px-5 py-3">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
