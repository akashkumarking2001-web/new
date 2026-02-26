import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const file = path.join(process.cwd(), 'data', 'leads.json');
        if (!fs.existsSync(file)) {
            return NextResponse.json([]);
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

        // Ensure data directory exists
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const file = path.join(dataDir, 'leads.json');

        let leads = [];
        if (fs.existsSync(file)) {
            const fileData = fs.readFileSync(file, 'utf8');
            if (fileData) {
                leads = JSON.parse(fileData);
            }
        }

        leads.unshift({ ...data, createdAt: new Date().toISOString() });

        fs.writeFileSync(file, JSON.stringify(leads, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Lead submission error:", error);
        return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
    }
}
