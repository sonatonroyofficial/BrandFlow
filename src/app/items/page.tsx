"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Loader2, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Item {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    category: string;
}

export default function ItemsPage() {
    const { user } = useAuth();
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("/api/items");
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Failed to fetch items", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return (
            <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        Marketplace
                    </h2>
                    <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                        Discover our curated collection of premium items.
                    </p>
                </div>

                {/* Conditional "Add Item" button for logged-in users */}
                {user && (
                    <div className="mt-4 sm:mt-0">
                        <Link href="/items/add">
                            <Button className="gap-2">
                                <Plus className="h-4 w-4" />
                                Add New Item
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {items.map((item) => (
                    <Link
                        key={item.id}
                        href={user ? `/items/${item.id}` : `/login?redirect=/items/${item.id}`}
                        className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:shadow-lg dark:bg-zinc-900 dark:ring-zinc-800"
                    >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-2xl bg-zinc-200 xl:aspect-h-8 xl:aspect-w-7">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    fill
                                    className="object-cover object-center group-hover:opacity-75 transition-opacity"
                                />
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-blue-600 mb-1">{item.category}</p>
                                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {item.name}
                                        </h3>
                                    </div>
                                    <p className="text-lg font-bold text-zinc-900 dark:text-white">{item.price}</p>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-6">
                                <Button variant="outline" className="w-full gap-2 relative z-10 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                                    <ShoppingCart className="h-4 w-4" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
