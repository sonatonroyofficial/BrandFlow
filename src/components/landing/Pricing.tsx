import { Check } from "lucide-react";
import { Button } from "../Button";

const tiers = [
    {
        name: "Hobby",
        id: "tier-hobby",
        href: "#",
        priceMonthly: "৳0",
        description: "The perfect plan if you're just getting started with our product.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"],
        featured: false,
    },
    {
        name: "Pro",
        id: "tier-pro",
        href: "#",
        priceMonthly: "৳3,480",
        description: "Dedicated support and infrastructure for your company.",
        features: [
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
            "Marketing automations",
        ],
        featured: true,
    },
    {
        name: "Enterprise",
        id: "tier-enterprise",
        href: "#",
        priceMonthly: "৳11,880",
        description: "Custom features and dedicated ongoing support.",
        features: [
            "Unlimited products",
            "Unlimited subscribers",
            "Custom reporting",
            "1-hour support response time",
            "Marketing automations",
            "Custom integrations",
        ],
        featured: false,
    },
];

export function Pricing() {
    return (
        <div className="bg-white py-24 dark:bg-zinc-950 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                        Pricing plans for teams of all sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Choose the best plan for your business. Change plans as your team grows.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 xl:p-10 ${tier.featured ? "lg:z-10 lg:rounded-b-none lg:shadow-xl lg:ring-2 lg:ring-blue-600" : ""
                                }`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={`text-lg font-semibold leading-8 ${tier.featured ? "text-blue-600" : "text-zinc-900 dark:text-white"
                                            }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.featured && (
                                        <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                                            Most popular
                                        </p>
                                    )}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{tier.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">{tier.priceMonthly}</span>
                                    <span className="text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button
                                variant={tier.featured ? "primary" : "outline"}
                                className={`mt-8 w-full ${!tier.featured ? "dark:text-white dark:ring-zinc-700 hover:dark:bg-zinc-800" : ""}`}
                                aria-describedby={tier.id}
                            >
                                Buy plan
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
