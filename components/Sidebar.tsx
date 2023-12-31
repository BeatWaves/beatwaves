"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box"
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import Image from "next/image";


interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div 
                className="
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    w-[250px]
                    p-2
                "
            >
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-5">
                        <Image 
                            src='/beat.png'
                            alt="Logo"
                            height={50}
                            width={100}
                        />
                        {routes.map((item) => (
                            <SidebarItem 
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library />
                </Box>
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-5">
                        Merch
                    </div>
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;