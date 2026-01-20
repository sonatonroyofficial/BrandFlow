import { Plus } from "lucide-react";

const faqs = [
    {
        question: "What's the best thing about BrandFlow?",
        answer:
            "BrandFlow gives you the flexibility to build your applications the way you want, with a focus on design and user experience.",
    },
    {
        question: "Can I use it for commercial projects?",
        answer:
            "Yes, absolutely. BrandFlow is designed to be used in both personal and commercial projects without any restrictions.",
    },
    {
        question: "How do I get support?",
        answer:
            "We offer 24/7 support for all our customers. You can reach out to us via email or chat at any time.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Yes, we offer a 14-day free trial on all our paid plans. No credit card required.",
    },
];

export function FAQ() {
    return (
        <div className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-zinc-900/10 dark:divide-zinc-800">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-zinc-900 dark:text-white">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-zinc-900/10 dark:divide-zinc-800">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pt-6">
                                <dt>
                                    <button className="flex w-full items-start justify-between text-left text-zinc-900 dark:text-white">
                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <Plus className="h-4 w-4" aria-hidden="true" />
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
