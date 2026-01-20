export function HowItWorks() {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        How it works
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Get started in three simple steps. No complex setup required.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="relative flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Browse Items</h3>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Explore our wide range of premium products. Filter by category, price, or popularity to find exactly what you need.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Place Order</h3>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Add to cart and checkout securely in seconds. We accept all major credit cards and digital wallets.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Fast Delivery</h3>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Sit back and relax. Your scheduled delivery will arrive at your doorstep in perfect condition.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
