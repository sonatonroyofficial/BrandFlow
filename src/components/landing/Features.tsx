import { Zap, Shield, BarChart3, Globe, Smartphone, Layers } from "lucide-react";

const features = [
    {
        name: "Premium Quality",
        description: "Every item in our marketplace is hand-picked and vetted for superior craftsmanship and durability.",
        icon: Layers,
    },
    {
        name: "Secure Transactions",
        description: "Shop with peace of mind. All payments are processed securely with top-tier encryption standards.",
        icon: Shield,
    },
    {
        name: "Fast Shipping",
        description: "Get your items delivered quickly to your doorstep with our reliable global shipping partners.",
        icon: Zap,
    },
    {
        name: "Global Marketplace",
        description: "Connect with buyers and sellers from around the world in one seamless platform.",
        icon: Globe,
    },
    {
        name: "Mobile Shopping",
        description: "Browse, buy, and sell on the go with our fully responsive mobile experience.",
        icon: Smartphone,
    },
    {
        name: "24/7 Support",
        description: "Our dedicated support team is available around the clock to assist you with any questions.",
        icon: Shield,
    },
];

export function Features() {
    return (
        <section id="features" className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        A Better Way to Buy & Sell
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        We are redefining the online marketplace experience with a focus on trust, quality, and community.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
