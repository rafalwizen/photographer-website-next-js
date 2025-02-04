import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    try {
        const configPath = path.join(process.cwd(), 'public', 'config', 'config.json');
        const configData = await fs.readFile(configPath, 'utf8');
        return NextResponse.json(JSON.parse(configData));
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to load configuration' },
            { status: 500 }
        );
    }
}