"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading } = useAuth();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Items", href: "/items" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/20 bg-white/80 backdrop-blur-xl dark:bg-zinc-950/80 dark:border-zinc-800/50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="BrandFlow Logo" width={32} height={32} className="h-8 w-8 object-contain" />
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Brand<span className="text-blue-600">Flow</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-blue-600",
                                pathname === link.href
                                    ? "text-blue-600"
                                    : "text-zinc-600 dark:text-zinc-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex md:items-center md:gap-4">
                    {!loading && (
                        <>
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        {user.email}
                                    </span>
                                    <Button variant="ghost" size="sm" onClick={() => signOut(auth)}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Sign out
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <Button variant="ghost" size="sm">
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button size="sm">Get Started</Button>
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-zinc-200 bg-white px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="my-2 border-zinc-200 dark:border-zinc-800" />
                        {!loading && (
                            <>
                                {user ? (
                                    <>
                                        <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 px-2 py-2">
                                            {user.email}
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start"
                                            onClick={() => {
                                                signOut(auth);
                                                setIsOpen(false);
                                            }}
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            Sign out
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" onClick={() => setIsOpen(false)}>
                                            <Button variant="ghost" className="w-full justify-start">
                                                Log in
                                            </Button>
                                        </Link>
                                        <Link href="/signup" onClick={() => setIsOpen(false)}>
                                            <Button className="w-full">Get Started</Button>
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
