import {
  MessageCircle,
  LayoutDashboard,
  FileText,
  WandSparkles,
  Menu,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigation } from "@/contexts/NavigationContext";
import type { TabValue } from "@/contexts/NavigationContext";

export function Header() {
  const { activeTab, setActiveTab } = useNavigation();

  const handleTabChange = (tab: TabValue) => {
    setActiveTab(tab);
  };

  return (
    <header className="px-4 md:px-6">
      <div className="relative flex h-[4.75rem] items-center justify-between pb-3">
        {/* Logo */}
        <div className="flex items-center space-x-1 flex-shrink-0">
          <img
            src="/assets/logo.svg"
            alt="SynthioLabs Logo"
            className="h-6 w-6 md:h-8 md:w-8"
          />
          <h1
            className="text-lg md:text-xl text-[#013BDB] font-[450] "
            style={{ wordSpacing: "-3px" }}
          >
            Synthio Labs
          </h1>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="h-5 w-5 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-[#F6F6F6]/90 border-2 border-white rounded-xl shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => handleTabChange("dashboard")}
                className={`flex items-center space-x-3 px-4 py-3 hover:bg-white/50 rounded-lg mx-1 my-1 ${
                  activeTab === "dashboard" ? "button-background-gradient" : ""
                }`}
              >
                <LayoutDashboard className="h-4 w-4 nav-icon" />
                <span className="text-sm nav-text">Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleTabChange("insights")}
                className={`flex items-center space-x-3 px-4 py-3 hover:bg-white/50 rounded-lg mx-1 my-1 ${
                  activeTab === "insights" ? "button-background-gradient" : ""
                }`}
              >
                <WandSparkles className="h-4 w-4 nav-icon" />
                <span className="text-sm nav-text">Insights</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleTabChange("transcript")}
                className={`flex items-center space-x-3 px-4 py-3 hover:bg-white/50 rounded-lg mx-1 my-1 ${
                  activeTab === "transcript" ? "button-background-gradient" : ""
                }`}
              >
                <FileText className="h-4 w-4 nav-icon" />
                <span className="text-sm nav-text">Transcript</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleTabChange("chat")}
                className={`flex items-center space-x-3 px-4 py-3 hover:bg-white/50 rounded-lg mx-1 my-1 ${
                  activeTab === "chat" ? "button-background-gradient" : ""
                }`}
              >
                <MessageCircle className="h-4 w-4 nav-icon" />
                <span className="text-sm nav-text">Chat</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={(value) => handleTabChange(value as TabValue)}
          // bg-[#FFFFFF]/80 WAS NOT VISIBLE
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center p-1 border-2 border-white rounded-full bg-[#F6F6F6]/70 dark:bg-darkBackground-100/50"
        >
          <TabsList className="flex items-center bg-transparent border-none h-12 p-1">
            <TabsTrigger
              value="dashboard"
              className="flex w-[100px] lg:w-[116px] items-center justify-center text-gray-500  data-[state=active]:button-background-gradient h-10 px-2 py-2 rounded-full "
            >
              <LayoutDashboard className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="text-xs lg:text-sm ">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger
              value="insights"
              className="flex w-[100px] lg:w-[116px] items-center justify-center text-gray-500  data-[state=active]:button-background-gradient h-10 px-2 py-2 rounded-full "
            >
              <WandSparkles className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="text-xs lg:text-sm ">Insights</span>
            </TabsTrigger>
            <TabsTrigger
              value="transcript"
              className="flex w-[100px] lg:w-[116px] items-center justify-center text-gray-500  data-[state=active]:button-background-gradient h-10 px-2 py-2 rounded-full "
            >
              <FileText className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="text-xs lg:text-sm ">Transcript</span>
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="flex w-[100px] lg:w-[116px] items-center justify-center text-gray-500 data-[state=active]:button-background-gradient h-10 px-2 py-2 rounded-full"
            >
              <MessageCircle className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="text-xs lg:text-sm">Chat</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}
