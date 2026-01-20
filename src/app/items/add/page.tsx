"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/Button";
import { toast } from "sonner";
import { ArrowLeft, ImageIcon, Loader2, Upload } from "lucide-react";
import Link from "next/link";

export default function AddItemPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        imageUrl: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/login");
        }
    }, [user, authLoading, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Failed to add item");
            }

            toast.success("Item added successfully!");
            router.push("/items");
            router.refresh();
        } catch (error) {
            console.error("Error adding item:", error);
            const errorMessage = error instanceof Error ? error.message : "Failed to add item";
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (authLoading || !user) {
        return (
            <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl px-6 py-12 lg:px-8">
            <div className="mb-8">
                <Link
                    href="/items"
                    className="group flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Marketplace
                </Link>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Add New Item</h1>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Fill in the details below to list a new item in the marketplace.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-white">
                            Item Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                                placeholder="e.g. Vintage Camera"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-white">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    required
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                                    placeholder="e.g. ৳299"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-white">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    name="category"
                                    id="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Art">Art</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-white">
                            Image URL
                        </label>
                        <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 dark:ring-zinc-700">
                            <div className="flex select-none items-center pl-3 text-zinc-500 sm:text-sm">
                                <ImageIcon className="h-4 w-4" />
                            </div>
                            <input
                                type="url"
                                name="imageUrl"
                                id="imageUrl"
                                required
                                value={formData.imageUrl}
                                onChange={handleChange}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 dark:text-white sm:text-sm sm:leading-6"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-white">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="description"
                                id="description"
                                rows={4}
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                                placeholder="Describe your item..."
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Adding Item...
                                </>
                            ) : (
                                <>
                                    <Upload className="mr-2 h-4 w-4" />
                                    Publish Item
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
