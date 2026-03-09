import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const defaultPricing = [
    {
        name: "FOUNDATION",
        price: "₹4,000",
        us: "$49",
        target: "Best for startups and small businesses",
        features: [
            "5-page responsive website OR basic mobile app",
            "UI design included",
            "SEO foundation setup",
            "30 days post-launch support",
            "Basic brand kit (logo + colors)"
        ],
        timeline: "2–4 weeks",
        cta: "Chat on WhatsApp",
        popular: false,
        delay: 0
    },
    {
        name: "GROWTH",
        price: "₹15,000",
        us: "$199",
        target: "Mid-level businesses and creators",
        features: [
            "Full-stack web app or advanced site",
            "Backend API development",
            "Database integration",
            "Basic optimizations",
            "Priority support"
        ],
        timeline: "4–6 weeks",
        cta: "Chat on WhatsApp",
        popular: false,
        delay: 0.1
    },
    {
        name: "PREMIUM",
        price: "₹45,000",
        us: "$799",
        target: "Best for growing businesses ready to compete",
        features: [
            "Complex platforms or mobile app (Flutter)",
            "Scalable architecture (microservices)",
            "3rd party integrations (payments, CRM, maps)",
            "CI/CD pipeline + staging environment",
            "Performance audit certificate (95+)"
        ],
        timeline: "5–10 weeks",
        cta: "Chat on WhatsApp",
        popular: true,
        delay: 0.2
    },
    {
        name: "ENTERPRISE",
        price: "Custom",
        us: "Custom",
        target: "For funded startups, enterprises, complex products",
        features: [
            "Dedicated project team (2 devs + designer + PM)",
            "Native Android + iOS apps",
            "Custom integrations (ERP, CRM, AI/ML)",
            "Digital marketing setup + first campaign",
            "SLA with guaranteed response times"
        ],
        timeline: "Flexible",
        cta: "Chat on WhatsApp",
        popular: false,
        delay: 0.3
    }
];

export async function GET() {
    try {
        const { data, error } = await supabase.from('pricing').select('*').order('delay', { ascending: true });
        if (error || !data || data.length === 0) {
            await supabase.from('pricing').insert(defaultPricing);
            return NextResponse.json(defaultPricing);
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
            await supabase.from('pricing').delete().not('id', 'is', null);
            const cleanedData = data.map(item => {
                const { id, ...rest } = item;
                return rest;
            });
            const { error } = await supabase.from('pricing').insert(cleanedData);
            if (error) throw error;
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ success: false }, { status: 400 });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
