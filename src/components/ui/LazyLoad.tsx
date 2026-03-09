"use client";

import React, { useRef, useState, useEffect } from "react";

interface LazyLoadProps {
    children: React.ReactNode;
    threshold?: number;
    rootMargin?: string;
    fallback?: React.ReactNode;
    className?: string;
}

export default function LazyLoad({ children, threshold = 0.05, rootMargin = "200px", fallback = null, className = "" }: LazyLoadProps) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                if (ref.current) observer.unobserve(ref.current);
            }
        }, {
            threshold,
            rootMargin
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [rootMargin, threshold]);

    return (
        <div ref={ref} className={`${!isIntersecting ? "min-h-[50vh]" : ""} ${className}`}>
            {isIntersecting ? children : fallback}
        </div>
    );
}
