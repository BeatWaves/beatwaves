"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div>
            {children}
        </div>
    );
}

export default Header;