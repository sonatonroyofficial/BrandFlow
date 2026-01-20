import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                            <span className="text-lg font-bold text-zinc-900 dark:text-white">
                                Brand<span className="text-blue-600">Flow</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                            Building the future of digital experiences with modern technology and beautiful design.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-blue-600">Features</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Showcase</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-blue-600">About</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                    <p className="text-xs text-center text-zinc-500">
                        &copy; {new Date().getFullYear()} BrandFlow Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
