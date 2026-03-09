import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const defaultPortfolio = [
    {
        name: "EUNOEA LIVING",
        category: "dynamic",
        type: "Ultra-Luxury Real Estate",
        desc: "A calm, mindful, editorial design for luxury residential real estate. Features generative crossfades and slow easing.",
        features: ["Ken Burns Slider", "Dark Mode Amenities", "Sticky Parallax"],
        link: "/demo/eunoea",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
        accent: "#1C1C1A",
        bg: "#FAF8F4",
        order: 1
    },
    {
        name: "FARMORA",
        category: "dynamic",
        type: "AgriTech & Modern Farming",
        desc: "An ultra-modern, organic layout for agriculture and tech companies. Features vibrant green highlights and split heroes.",
        features: ["Split Hero Anim", "Stat Counters", "Product Benefits"],
        link: "/demo/farmora",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
        accent: "#52B788",
        bg: "#FFFFFF",
        order: 2
    },
    {
        name: "DELIZIO",
        category: "static",
        type: "Food Delivery App",
        desc: "A vibrant, conversion-optimized landing page for food delivery. Features a bright orange brand and floating UI elements.",
        features: ["App Mockups", "Interactive Steps", "Feature Cloud"],
        link: "/demo/delizio",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
        accent: "#F5A623",
        bg: "#FFFFFF",
        order: 3
    },
    {
        name: "IMPECCIFY",
        category: "static",
        type: "Premium Bakery",
        desc: "A wildly creative, asymmetric editorial design for artisan bakeries. Features overlapping text and emoji storytelling.",
        features: ["Mosaic Hero Grid", "Menu Strip", "Horizontal Scroll"],
        link: "/demo/impeccify",
        image: "https://images.unsplash.com/photo-1558961363-c288f3435de1?auto=format&fit=crop&q=80&w=800",
        accent: "#F5C842",
        bg: "#1E0F05",
        order: 4
    },
    {
        name: "LAWTIX",
        category: "static",
        type: "Law Firm & Legal Services",
        desc: "A premium, authoritative web presence for top-tier law firms. Features a dark forest green and gold aesthetic.",
        features: ["Practice Areas", "Case Results", "Testimonials Carousel"],
        link: "/demo/lawtix",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
        accent: "#C9A84C",
        bg: "#1B4332",
        order: 5
    },
    {
        name: "VELOCITY",
        category: "dynamic",
        type: "SaaS Performance Dashboard",
        desc: "A high-octane dark mode dashboard for performance monitoring. Features real-time data visualizations and neon accents.",
        features: ["Live Graphs", "Dark Mode UI", "Interactive Metrics"],
        link: "/demo/velocity",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        accent: "#00F2FF",
        bg: "#050505",
        order: 6
    },
    {
        name: "LUMINA",
        category: "dynamic",
        type: "Creative Design Agency",
        desc: "A glassmorphic, ethereal portfolio for creative studios. Features smooth parallax and glowing ambient backgrounds.",
        features: ["Glassmorphism", "Soft Shadows", "Smooth Transitions"],
        link: "/demo/lumina",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        accent: "#FF00E5",
        bg: "#0A0010",
        order: 7
    },
    {
        name: "ZENITH",
        category: "static",
        type: "Corporate Headquarters",
        desc: "A clean, brutalist-inspired architecture site. Features sharp lines, minimalist typography, and high-contrast photography.",
        features: ["Brutalist Layout", "Strict Grid", "B&W Aesthetic"],
        link: "/demo/zenith",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        accent: "#FFFFFF",
        bg: "#111111",
        order: 8
    },
    {
        name: "NEXUS",
        category: "dynamic",
        type: "Futuristic Crypto Platform",
        desc: "A 3D-heavy landing page for decentralized finance. Features interactive nodes and holographic UI elements.",
        features: ["3D Interactive", "Crypto Widgets", "Modern Type"],
        link: "/demo/nexus",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb620040bc?auto=format&fit=crop&q=80&w=800",
        accent: "#7B2FE8",
        bg: "#020202",
        order: 9
    },
    {
        name: "AURA",
        category: "static",
        type: "Wellness & Spa",
        desc: "A serene, pastel-toned layout for high-end wellness centers. Features soft animations and organic shapes.",
        features: ["Soft UI", "Organic Shapes", "Calm Colors"],
        link: "/demo/aura",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
        accent: "#EBD9D1",
        bg: "#FDFBF7",
        order: 10
    },
    {
        name: "QUANTUM",
        category: "dynamic",
        type: "Tech Conference 2026",
        desc: "An experimental, interactive site for global tech events. Features scroll-triggered animations and generative art.",
        features: ["Gen-Art BG", "Scroll Triggers", "Ticket Widget"],
        link: "/demo/quantum",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
        accent: "#00FF66",
        bg: "#000000",
        order: 11
    },
    {
        name: "PULSE",
        category: "static",
        type: "Music Production Studio",
        desc: "A bold, high-contrast dark mode site for music producers. Features soundwave visualizations and dark grit.",
        features: ["Dark Grit UI", "Waveform Visuals", "Audio Player"],
        link: "/demo/pulse",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
        accent: "#FF3333",
        bg: "#050505",
        order: 12
    }

];

export async function GET() {
    try {
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const file = path.join(dataDir, 'portfolio.json');

        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, JSON.stringify(defaultPortfolio, null, 2));
            return NextResponse.json(defaultPortfolio);
        }

        const data = fs.readFileSync(file, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const file = path.join(process.cwd(), 'data', 'portfolio.json');

        // Ensure array
        if (Array.isArray(data)) {
            fs.writeFileSync(file, JSON.stringify(data, null, 2));
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ success: false, error: 'Invalid data format' }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}
