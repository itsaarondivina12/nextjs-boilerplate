"use client"; // Add this directive at the top
import '../globals.css';

import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import Link from 'next/link';
import { Button } from '@nextui-org/button';


const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
];

const MainHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false); // Move useState inside MainHeader

    return (
        <Navbar className="navbar" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <img
                        src="/Vxi-logo(3).png" // Replace with the actual path to your image
                        alt="Brand Logo" // Alternative text for the image
                        className="mr-2" // Add margin to the right for spacing
                        style={{ maxWidth: '55px', maxHeight: '55px' }} // Adjust size as needed
                    />
                    <p className="font-bold text-inherit">VXI AARON</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                            }
                            className="w-full text-lg" // Use CSS classes to control the size
                            href="#"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
};

const MainFooter: React.FC = () => (
    <footer className="footer-container shadow" id="footer">
        <div
            className="footerholder"
            style={{ backgroundColor: 'white', position: 'fixed', left: 0, bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }} // Added flexbox styles
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                <img
                    src="VXI_LOGO_FOOTER LATEST.png" // Ensure the correct path
                    alt="VXI Logo" // Added alt text for accessibility
                    style={{ width: '200px', marginTop: '3px', marginBottom: '3px' }} // Adjusted style syntax
                />
            </div>
            <p style={{ fontSize: '16px', marginBottom: '5px' , position: 'absolute', right:'0'}}>
                <b>Version:</b> 2.0 <b>Date:</b> 03/30/2024
            </p>
        </div>
    </footer>
);



interface MainLayoutProps {
    children: React.ReactNode; // This allows you to pass children of any type
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <MainHeader />
            <main>{children}</main>
            <MainFooter />
        </div>
    );
};

export default MainLayout;
