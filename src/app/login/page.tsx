"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/items");
        } catch (err: any) {
            setError(err.message || "Failed to log in");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError("");
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/items");
        } catch (err: any) {
            setError(err.message || "Failed to log in with Google");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-black px-6">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Sign in to continue to your account
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        {error && (
                            <div className="rounded-md bg-red-50 p-4 text-sm text-red-500 dark:bg-red-900/30 dark:text-red-400">
                                {error}
                            </div>
                        )}
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-black dark:text-white dark:placeholder-zinc-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-black dark:text-white dark:placeholder-zinc-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full" isLoading={loading}>
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-300 dark:border-zinc-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-zinc-500 dark:bg-zinc-900">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        className="w-full gap-2 dark:text-white"
                        onClick={handleGoogleLogin}
                        isLoading={loading}
                    >
                        <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M12.0003 20.45c4.6667 0 7.8286-3.2381 7.8286-8.0857 0-0.7428-0.0857-1.4095-0.2-2.0666h-7.6286v3.8381h4.419c-0.2095 1.4095-1.5238 3.9904-4.419 3.9904-2.6571 0-4.8286-2.1619-4.8286-4.8286s2.1714-4.8286 4.8286-4.8286c1.2857 0 2.419 0.4476 3.3238 1.3047l2.8476-2.8476c-1.7809-1.6666-4.0857-2.6952-6.1714-2.6952-5.1143 0-9.2571 4.1428-9.2571 9.2571s4.1428 9.2571 9.2571 9.2571z"
                                fill="currentColor"
                            />
                        </svg>
                        Sign in with Google
                    </Button>

                    <div className="text-center text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Don't have an account? </span>
                        <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
