import { Button } from "@/components/ui/button";  
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react"; // You can use any icon library, this is just for the user profile dropdown.

export default function Navbar() {
  return (
    <div className="bg-primary p-4 shadow-md">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <div className="text-white font-semibold text-2xl">
          <a href="/" className="hover:text-accent">Plantify</a>
        </div>

        {/* Navbar links */}
        <div className="flex gap-6">
          <a href="/" className="text-white hover:text-accent">
            Home
          </a>
          <a href="/login" className="text-white hover:text-accent">
            Login
          </a>
          <a href="/signup" className="text-white hover:text-accent">
            Signup
          </a>
        </div>

        {/* User Profile Dropdown */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=" flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                Profile
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
