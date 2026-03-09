import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const defaultBlogs = [
    {
        title: "How We Optimized a Next.js App to Handle 50K Concurrent Users",
        cat: "Engineering",
        read: "5 min read",
        desc: "A deep dive into Edge caching, React Server Components, and connection pooling.",
        color: "#00C8FF"
    },
    {
        title: "Why Your Figma Design Isn't Translating to Code (And How to Fix It)",
        cat: "Design System",
        read: "4 min read",
        desc: "Bridging the gap between UI design tokens and Tailwind configuration architectures.",
        color: "#FF6B35"
    },
    {
        title: "Flutter vs React Native in 2025: An Objective Agency Perspective",
        cat: "Mobile Dev",
        read: "7 min read",
        desc: "We build in both. Here is exactly when we recommend one over the other for our clients.",
        color: "#7B2FE8"
    }
];

export async function GET() {
    try {
        const { data, error } = await supabase.from('blogs').select('*');
        if (error || !data || data.length === 0) {
            await supabase.from('blogs').insert(defaultBlogs);
            return NextResponse.json(defaultBlogs);
        }
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        if (Array.isArray(data)) {
            await supabase.from('blogs').delete().not('id', 'is', null);
            const cleanedData = data.map(item => {
                const { id, ...rest } = item;
                return rest;
            });
            const { error } = await supabase.from('blogs').insert(cleanedData);
            if (error) throw error;
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ success: false }, { status: 400 });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
