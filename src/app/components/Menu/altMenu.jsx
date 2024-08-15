'use client'

import Menu, { MenuItem } from 'rc-menu';
import Link from 'next/link';
import { indie_flower } from '@/app/fonts/fonts';

const AltMenu = () => {
    return (
        <div className={`${indie_flower.className} absolute top-4 left-0 w-full text-[rgb(50,25,110)] text-2xl`}>
            <Menu className="flex justify-center md:justify-evenly gap-4">
                <MenuItem className="hover:border-b-4 border-blue-500 hover:font-bold">
                    <Link href="/" aria-label="Home">
                        Home
                    </Link>
                </MenuItem>
                <MenuItem className="hover:border-b-4 border-blue-500 hover:font-bold">
                    <Link href="#about" aria-label="About">
                        About
                    </Link>
                </MenuItem>
                <MenuItem className="hover:border-b-4 border-blue-500 hover:font-bold">
                    <Link href="#skills" aria-label="Skills">
                        Skills
                    </Link>
                </MenuItem>
                <MenuItem className="hover:border-b-4 border-blue-500 hover:font-bold">
                    <Link href="#projects" aria-label="Projects">
                        Projects
                    </Link>
                </MenuItem>
                <MenuItem className="hover:border-b-4 border-blue-500 hover:font-bold">
                    <Link href="#contact" aria-label="Contact">
                        Contact
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default AltMenu;
