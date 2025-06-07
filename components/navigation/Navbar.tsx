"use client";
import Link from "next/link";
import { Search } from "@/components/icons";
import { ThemeDropDown } from "@/components/theme/theme-dorpdown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/elements/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/navigation/navigation-menu";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div className="bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 container">
        <NavigationMenu className="flex-none">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "gap-2 bg-white/10 hover:bg-white/20 transition-colors"
                  )}
                >
                  <span className="font-bold text-white">Dreamdrive</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/70" />
            <Input
              type="search"
              placeholder="Search cars..."
              className="pl-8 w-[200px] md:w-[300px] bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white/30 hover:bg-white/20 transition-colors"
              defaultValue={searchParams.get("query") || ""}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <ThemeDropDown />
        </div>
      </div>
    </div>
  );
};
