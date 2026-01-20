import Image from "next/image";

const testimonials = [
    {
        body: "BrandFlow has completely transformed how we build our web applications. It's incredibly intuitive and powerful.",
        author: {
            name: "Sarah Chen",
            handle: "sarahchen__",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "I've tried many similar tools, but nothing comes close to the ease of use and features that BrandFlow offers.",
        author: {
            name: "Michael Foster",
            handle: "michaelfoster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "The team behind BrandFlow is amazing. They are always listening to feedback and shipping new updates.",
        author: {
            name: "Amelia Rogers",
            handle: "ameliarogers",
            imageUrl:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
];

export function Testimonials() {
    return (
        <div className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-zinc-700">
                                    <blockquote className="text-zinc-900 dark:text-zinc-300">
                                        <p>{`"${testimonial.body}"`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <img className="h-10 w-10 rounded-full bg-zinc-50" src={testimonial.author.imageUrl} alt="" />
                                        <div>
                                            <div className="font-semibold text-zinc-900 dark:text-white">{testimonial.author.name}</div>
                                            <div className="text-zinc-600 dark:text-zinc-400">@{testimonial.author.handle}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
