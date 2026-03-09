import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('bonuses')
            .select('*')
            .order('createdAt', { ascending: false });

        if (error || !data) {
            return NextResponse.json([]);
        }
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { error } = await supabase
            .from('bonuses')
            .insert([{ ...data }]);

        if (error) {
            throw error;
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Bonus submission error:", error);
        return NextResponse.json({ success: false, error: 'Failed to save bonus submission' }, { status: 500 });
    }
}
