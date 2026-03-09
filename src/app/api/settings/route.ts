import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';

const DEFAULT_SETTINGS = {
    whatsappNumber: "+918610381533",
    whatsappMessage: "Hello AxoSoul, I'm interested in your services!",
    whatsappLink: "https://wa.me/918610381533",
    instagramLink: "https://www.instagram.com/axosoul_/",
    showFounders: true
};

export async function GET() {
    try {
        const { data, error } = await supabase.from('settings').select('*').single();
        if (error || !data) {
            return NextResponse.json(DEFAULT_SETTINGS);
        }
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Ensure we are updating ID 1
        const { error } = await supabase
            .from('settings')
            .upsert({ id: 1, ...data });

        if (error) {
            throw error;
        }

        // Revalidate the home page to reflect the new settings
        revalidatePath('/');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Settings save error:", error);
        return NextResponse.json({ success: false, error: 'Failed to save settings' }, { status: 500 });
    }
}
