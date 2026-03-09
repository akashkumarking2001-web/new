"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the static category as default if someone hits /portfolio
        router.replace("/portfolio/static");
    }, [router]);

    return (
        <div className="min-h-screen bg-void flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-pulse-cyan border-t-transparent rounded-full animate-spin" />
        </div>
    );
}
