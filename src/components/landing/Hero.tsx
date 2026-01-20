import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-32 dark:bg-zinc-950 lg:pt-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-zinc-700 dark:hover:ring-zinc-600">
                            <span className="flex items-center gap-1">
                                <Sparkles className="h-4 w-4 text-yellow-500" />
                                New Collection Available
                            </span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
                        Discover Extraordinary Items for Your Lifestyle
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Explore our curated marketplace of premium furniture, electronics, and unique accessories. Elevate your space with quality that speaks for itself.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/items">
                            <Button size="lg" className="gap-2">
                                Shop Now <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/items/add">
                            <Button variant="outline" size="lg">
                                Sell an Item
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
            </div>
        </section>
    );
}
