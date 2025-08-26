import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  List, 
  Heart, 
  Settings, 
  Workflow, 
  BarChart3,
  ChevronRight,
  Plus
} from "lucide-react";

const navigation = [
  { name: "New Search", href: "/", icon: Search, isButton: true },
  { name: "Listing", href: "/listings", icon: List },
  { name: "Shortlist", href: "/shortlist", icon: Heart },
  { name: "Setting", href: "/settings", icon: Settings },
  { name: "Integration", href: "/integrations", icon: Workflow },
  { name: "Usage", href: "/usage", icon: BarChart3 },
];

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-sidebar border-r border-sidebar-border flex flex-col h-screen transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">AI</span>
          </div>
          {!isCollapsed && (
            <h2 className="text-sidebar-foreground font-semibold">Talent App</h2>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          
          if (item.isButton) {
            return (
              <Link key={item.name} to={item.href}>
                <Button 
                  className={cn(
                    "w-full justify-start gap-3 bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground",
                    isCollapsed && "px-2"
                  )}
                >
                  <Plus className="h-4 w-4" />
                  {!isCollapsed && item.name}
                </Button>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isCollapsed && "justify-center px-2"
              )}
            >
              <item.icon className="h-4 w-4" />
              {!isCollapsed && item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <Link 
          to="/profile"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" alt="Keya" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <>
              <span className="text-sidebar-foreground font-medium">Keya</span>
              <ChevronRight className="h-4 w-4 text-sidebar-foreground ml-auto" />
            </>
          )}
        </Link>
      </div>
    </div>
  );
}