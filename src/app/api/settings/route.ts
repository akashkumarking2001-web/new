import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

const DEFAULT_SETTINGS = {
    whatsappNumber: "+918610381533",
    whatsappMessage: "Hello AxoSoul, I'm interested in your services!",
    whatsappLink: "https://wa.me/918610381533",
    instagramLink: "https://www.instagram.com/axosoul_/",
    showFounders: true
};

export async function GET() {
    try {
        const file = path.join(process.cwd(), 'data', 'settings.json');
        if (!fs.existsSync(file)) {
            return NextResponse.json(DEFAULT_SETTINGS);
        }
        const data = fs.readFileSync(file, 'utf8');
        const settings = JSON.parse(data);
        return NextResponse.json({ ...DEFAULT_SETTINGS, ...settings });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const dataDir = path.join(process.cwd(), 'data');
        const file = path.join(dataDir, 'settings.json');

        fs.writeFileSync(file, JSON.stringify(data, null, 2));

        // Revalidate the home page to reflect the new settings
        revalidatePath('/');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Settings save error:", error);
        return NextResponse.json({ success: false, error: 'Failed to save settings' }, { status: 500 });
    }
}
