import { Button } from "../Button";

export function Newsletter() {
    return (
        <div className="bg-white py-16 dark:bg-zinc-950 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Get notified when we’re launching.
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-zinc-300">
                        Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                    </p>
                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <Button type="submit" variant="secondary" className="flex-none bg-white text-zinc-900 hover:bg-zinc-100">
                            Notify me
                        </Button>
                    </form>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#newsletter-gradient)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="newsletter-gradient">
                                <stop stopColor="#3b82f6" />
                                <stop offset={1} stopColor="#4f46e5" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}
