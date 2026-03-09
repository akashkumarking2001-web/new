import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('leads')
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
        let data = await req.json();

        // Check if data is array or object and insert accordingly
        const { error } = await supabase
            .from('leads')
            .insert(Array.isArray(data) ? data : [{ ...data }]);

        if (error) {
            throw error;
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Lead submission error:", error);
        return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
    }
}
