import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        const file = path.join(dataDir, 'blogs.json');
        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, JSON.stringify(defaultBlogs, null, 2));
            return NextResponse.json(defaultBlogs);
        }
        const data = fs.readFileSync(file, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const file = path.join(process.cwd(), 'data', 'blogs.json');
        if (Array.isArray(data)) {
            fs.writeFileSync(file, JSON.stringify(data, null, 2));
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ success: false }, { status: 400 });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
