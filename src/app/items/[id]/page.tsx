
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Loader2, ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { Item } from "@/lib/items";
import { useAuth } from "@/context/AuthContext";

export default function ItemDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const { user, loading: authLoading } = useAuth();

    const [item, setItem] = useState<Item | null>(null);
    const [loading, setLoading] = useState(true);
    const [headerImageLoaded, setHeaderImageLoaded] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push(`/login?redirect=/items/${id}`);
            return;
        }

        if (!id) return;

        const fetchItem = async () => {
            try {
                // Determine the base URL for fetching the data
                // In client-side logic, purely relative paths work fine
                const response = await fetch(`/api/items/${id}`);

                if (!response.ok) {
                    throw new Error("Item not found");
                }

                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Failed to fetch item", error);
                // Optionally redirect to 404 or show error
                // router.push('/404');
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id, router, user, authLoading]);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset state after 2 seconds
    };

    if (loading || authLoading) {
        return (
            <div className="flex h-[calc(100vh-4rem)] items-center justify-center bg-white dark:bg-zinc-950">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (!item) {
        return (
            <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-950">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Item not found</h2>
                <Button onClick={() => router.push("/items")}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Marketplace
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                {/* Back Button */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Items
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 lg:aspect-auto lg:h-[600px]">
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className={`object-cover object-center transition-opacity duration-500 ${headerImageLoaded ? "opacity-100" : "opacity-0"
                                }`}
                            onLoad={() => setHeaderImageLoaded(true)}
                            priority
                        />
                        {!headerImageLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center">
                        <div>
                            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/20 dark:text-blue-400">
                                {item.category}
                            </span>
                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                                {item.name}
                            </h1>
                            <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                {item.price}
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Description</h3>
                            <div className="mt-4 space-y-6">
                                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center gap-6">
                            <Button
                                size="lg"
                                className={`w-full flex-1 gap-2 text-base transition-all duration-300 ${isAdded ? 'bg-green-600 hover:bg-green-700' : ''}`}
                                onClick={handleAddToCart}
                            >
                                {isAdded ? (
                                    <>
                                        <Check className="h-5 w-5" />
                                        Added to Cart
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="h-5 w-5" />
                                        Add to Cart
                                    </>
                                )}
                            </Button>
                        </div>

                        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                            <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                                    In Stock
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                                    Free Shipping
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
